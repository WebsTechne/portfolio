"use client";

import { useLenis } from "lenis/react";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button, buttonVariants } from "../ui/button";
import {
  IconArrowRight,
  IconArrowUp,
  IconBrandGithub,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "./header";
import { Spinner } from "../ui/spinner";

const SOCIAL_LINKS = [
  { icon: IconBrandX, href: "https://x.com/triumph_dev" },
  { icon: IconBrandGithub, href: "https://github.com/webstechne" },
  { icon: IconMail, href: "mailto:triumphaidenojie08@gmail.com" },
];

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, "Name must be at most 100 characters."),
  email: z.email("Please enter a valid email address."),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, "Message must be at most 1000 characters."),
});
type FormValues = z.infer<typeof formSchema>;

export function Footer() {
  const lenis = useLenis();

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      lenis?.scrollTo(href);
    }
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const {
    control,
    formState: { isSubmitting },
  } = form;

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const onSubmit = async (data: FormValues) => {
    console.log("onSubmit fired", data);
    setSubmitStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }
      setSubmitStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    }
  };

  return (
    <footer id="contact" className="bg-background relative min-h-100">
      <div className="mx-auto grid max-w-240 items-center not-sm:gap-4 sm:grid-cols-2 sm:py-10">
        <div className="flex flex-col gap-2 p-4 sm:py-0">
          <h2 className="font-heading w-full text-xl font-semibold sm:text-3xl">
            Contact me
          </h2>

          <p className="text-muted-foreground w-full text-sm sm:text-base">
            Open to internships, freelance work and interesting collaborations.
          </p>

          <div className="flex w-full items-center justify-start gap-2">
            {SOCIAL_LINKS.map((soc) => (
              <Link
                key={soc.href}
                href={soc.href!}
                replace={!soc.href?.startsWith("http")}
                target={soc.href?.startsWith("http") ? "_blank" : "_self"}
                className={buttonVariants({
                  variant: "outline",
                  size: "icon-lg",
                })}
              >
                <Icon icon={soc.icon} className="size-5!" />
              </Link>
            ))}
          </div>
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit, (errors) => {
            console.log("validation failed", errors);
          })}
          className="p-4 sm:border-l sm:px-5 sm:py-0"
          role="form"
        >
          <FieldGroup className="gap-4.5">
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    placeholder="Your name"
                    className="h-11 border-0 border-b-2"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="email"
                    placeholder="Your email"
                    className="h-11 border-0 border-b-2"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="message"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Message</FieldLabel>
                  <Textarea
                    {...field}
                    id={field.name}
                    placeholder="Your message"
                    className="h-[5lh] resize-none border-0 border-b-2"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Field>
              <Button
                type="submit"
                size="lg"
                className="h-11 w-max!"
                disabled={isSubmitting}
                onClick={() => console.log("button clicked")}
              >
                {isSubmitting ? (
                  <>
                    Sending... <Spinner />
                  </>
                ) : (
                  <>
                    Send message <IconArrowRight />
                  </>
                )}
              </Button>
              {submitStatus === "success" && (
                <p className="text-sm text-green-600">
                  Message sent — I'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Try emailing me directly.
                </p>
              )}
            </Field>
          </FieldGroup>
        </form>
      </div>

      <Button
        className="absolute right-4 bottom-4 h-10"
        onClick={(e) => handleHashClick(e, "#hero")}
      >
        <IconArrowUp size={20} /> Scroll to Top
      </Button>
    </footer>
  );
}
