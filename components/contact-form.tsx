"use client"

import { useActionState } from "react"
import { MailPlus } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextArea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import { sendMessage } from "@/lib/action"

const initialState = { success: false, message: "" }

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: typeof initialState, formData: FormData) => {
      const result = await sendMessage(prevState, formData)
      if (result.success) {
        return { success: true, message: result.message }
      } else {
        return { success: false, message: result.message }
      }
    },
    initialState
  )

  return (
    <div data-slot="contact-form">
      <form  action="https://formspree.io/f/xpzvekgr"  method="POST">
       
        <Label htmlFor="name" size="small">Name</Label>
        <Input id="name" name="name" required uiSize="medium" placeholder="Name" />
       
        <Label htmlFor="email" size="small">Email</Label>
        <Input id="email" name="email" type="email" required uiSize="medium" placeholder="E-mail" />
        

        <Label htmlFor="message" size="small">Message</Label>
        <TextArea rows={5} id="message" name="message" placeholder="Message" required/>

        <Button  type="submit" title={isPending ? "Sending..." : "Send"} variant="primary" size="medium" disabled={isPending} style={{marginTop:'1rem'}}/>
      </form>
      {state.message && <div>{state.message}</div>}
    </div>
  )
}
