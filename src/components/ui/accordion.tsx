"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-gray-200 data-[state=open]:border-primary-500", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "text-[1rem] md:text-[1.125rem] font-medium md:text-xl-medium text-grayscale-950 text-left",
          "cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start gap-[0.75rem] py-[1.25rem] transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 ",
          "[&[data-state=open]>svg]:rotate-45 text-grayscale-950",
          className
        )}
        {...props}
      >
        <Plus className="pointer-events-none text-grayscale-950 size-[1.25rem] shrink-0 translate-y-0.5 transition-transform duration-200" />
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-medium md:text-l-regular text-grayscale-600"
      {...props}
    >
      <div className={cn("pt-0 pb-[1.25rem] pl-[2rem]", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
