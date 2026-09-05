"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { cn } from "@/lib/utils"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple" | string
  collapsible?: boolean
  defaultValue?: any
  value?: any
  onValueChange?: (value: any) => void
  children?: React.ReactNode
}

function Accordion({
  className,
  type,
  collapsible,
  ...props
}: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...(props as any)}
    />
  )
}

function AccordionItem({
  className,
  value,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string | number; disabled?: boolean }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b", className)}
      value={value}
      {...(props as any)}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-4 text-left text-base font-semibold transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
          className
        )}
        {...(props as any)}
      >
        {children}
        <ChevronDownIcon className="size-5 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:hidden text-muted-foreground" />
        <ChevronUpIcon className="size-5 shrink-0 transition-transform duration-200 hidden group-aria-expanded/accordion-trigger:inline text-muted-foreground" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...(props as any)}
    >
      <div className={cn("pt-0 pb-4 text-muted-foreground leading-relaxed", className)}>
        {children}
      </div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
