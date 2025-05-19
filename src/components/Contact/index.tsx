/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

// import { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { styles } from '../Styles';
import EarthCanvas from '../Canvas/Earth';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailValidationSchema } from '@/validations/email';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { LoaderPinwheel } from 'lucide-react';

const Contact = () => {
  // const formRef = useRef<HTMLFormElement>(null);

  const form = useForm({ resolver: zodResolver(emailValidationSchema) });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    const { name, email, subject, message } = data;

    // my info from https://www.emailjs.com in env
    const serviceID = process.env.NEXT_PUBLIC_Service_ID as string;
    const templateID = process.env.NEXT_PUBLIC_Template_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_Public_Key as string;

    const templateParams: Record<string, unknown> = {
      from_name: name,
      from_email: email,
      to_name: 'Khaled Siddique',
      subject,
      message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      toast.success('Thank you. I will get back to you as soon as possible.');
    } catch (error) {
      toast.error('Ahh, something went wrong. Please try again.');
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-[#100d25] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-12 flex flex-col gap-8"
          >
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium mb-2">
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
                      placeholder="What's your good name?"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium mb-2">
                    Your Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
                      placeholder="What's your web address?"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* subject */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium mb-2">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#151030] py-6 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
                      placeholder="What's your message subject?"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium mb-2">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-[#151030] py-6 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium"
                      placeholder="What do you want to say?"
                      {...field}
                      value={field.value || ''}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center mt-3">
              <Button
                type="submit"
                className="bg-[#151030] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#050816]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="animate-spin">
                    <LoaderPinwheel />
                  </div>
                ) : (
                  'Send'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
