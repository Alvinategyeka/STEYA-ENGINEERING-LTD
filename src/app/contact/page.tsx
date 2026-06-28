"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
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
    <>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-main text-center">
          <RevealOnScroll>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-charcoal mb-4">
              Let’s Talk
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto">
              We’re ready to bring your project to life. Reach out and we’ll
              respond within 24 hours.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-padding container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-600">
                  Your message has been received. We’ll be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <input
                    {...register("name")}
                    placeholder="Your Name"
                    className="w-full border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-bronze transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email")}
                    placeholder="Email Address"
                    className="w-full border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-bronze transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("subject")}
                    placeholder="Subject"
                    className="w-full border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-bronze transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Your Message"
                    className="w-full border border-gray-200 p-4 rounded-sm focus:outline-none focus:border-bronze transition-colors"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-bronze text-white py-4 text-sm uppercase tracking-[0.2em] hover:bg-charcoal transition-colors duration-300"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </RevealOnScroll>

          <div className="space-y-8">
            <RevealOnScroll>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="text-bronze flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h3 className="font-bold text-charcoal">Office</h3>
                    <p className="text-gray-600">
                      Plot 45, Kampala Road, Kampala, Uganda
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    className="text-bronze flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h3 className="font-bold text-charcoal">Phone</h3>
                    <p className="text-gray-600">+256 700 123456</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-bronze flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-bold text-charcoal">Email</h3>
                    <p className="text-gray-600">
                      info@steyaengineering.com
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="rounded-sm overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.816857435534!2d32.58137631475409!3d0.313610499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc7f5d3aab3b%3A0x567412b6ffc0b72!2sKampala%20Road%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1642426427931!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <a
                href="https://wa.me/256700123456"
                target="_blank"
                className="flex items-center justify-center gap-2 w-full border border-green-500 text-green-600 py-4 text-sm uppercase tracking-wider hover:bg-green-50 transition-colors"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}