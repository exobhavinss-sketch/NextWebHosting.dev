"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  studentId: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const searchParams = useSearchParams();
  const plan = searchParams?.get("plan");
  const isStudentPlan = plan === "student";

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    if (plan) {
      setValue("subject", `Inquiry for ${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan`);
    }
  }, [plan, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    // In production, integrate with Resend or EmailJS
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-background rounded-2xl p-8 border border-border/50 shadow-sm space-y-6 w-full"
    >
      {isStudentPlan && (
        <div className="bg-primary/10 border border-primary/20 text-primary p-4 rounded-xl text-sm mb-2">
          <p className="font-semibold mb-1">Student Verification Required</p>
          <p>Please use your university <strong>.edu</strong> email address OR provide your Student ID Number below. We will verify your student status before proceeding with the Student Plan.</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register("name")}
            className="h-12"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            className="h-12"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          placeholder="I need a website for my business"
          {...register("subject")}
          className="h-12"
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="text-xs text-destructive">
            {errors.subject.message}
          </p>
        )}
      </div>

      {isStudentPlan && (
        <div className="space-y-2">
          <Label htmlFor="studentId">Student ID Number <span className="text-muted-foreground font-normal">(Optional if using .edu email)</span></Label>
          <Input
            id="studentId"
            placeholder="e.g. 12345678"
            {...register("studentId")}
            className="h-12"
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project, goals, and timeline..."
          rows={5}
          {...register("message")}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-12 text-base font-semibold"
        size="lg"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>

      {isSubmitted && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-green-600 font-medium"
        >
          Thank you! Your message has been sent successfully. We'll get
          back to you soon.
        </motion.p>
      )}
    </form>
  );
}
