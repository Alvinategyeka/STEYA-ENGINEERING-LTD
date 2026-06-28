"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <section
      className="relative section-padding bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/cta-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-charcoal/90" />
      <div className="relative container-main text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
          Let’s Build Together
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-12">
          Start a conversation with our team. We’ll get back to you within 24
          hours.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-xl font-light"
          >
            Thank you! We’ll be in touch soon.
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto space-y-6"
          >
            <input
              {...register("name")}
              placeholder="Your Name"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-4 rounded-sm focus:outline-none focus:border-bronze"
            />
            {errors.name && (
              <p className="text-red-400 text-sm text-left">
                {errors.name.message}
              </p>
            )}
            <input
              {...register("email")}
              placeholder="Email Address"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-4 rounded-sm focus:outline-none focus:border-bronze"
            />
            {errors.email && (
              <p className="text-red-400 text-sm text-left">
                {errors.email.message}
              </p>
            )}
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Your Message"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 p-4 rounded-sm focus:outline-none focus:border-bronze"
            />
            {errors.message && (
              <p className="text-red-400 text-sm text-left">
                {errors.message.message}
              </p>
            )}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-bronze text-white py-4 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-charcoal transition-colors duration-300"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        )}

        <a
          href="https://wa.me/256xxxxxxxxx"
          target="_blank"
          className="inline-flex items-center gap-2 mt-8 text-white/60 hover:text-bronze transition-colors"
        >
          <MessageCircle size={20} /> Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}