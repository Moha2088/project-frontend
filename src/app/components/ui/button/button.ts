import { Component, EventEmitter, input, Output } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  "flex justify-center items-center font-bold text-sm rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
  {
      variants: {
          variant:{
              dark: "bg-stone-800 text-white font-bold hover:bg-stone-500",
              light: "bg-white font-bold border-gray-100 border-2 hover:bg-zinc-200",
              destructive: "bg-red-400 text-white hover:bg-red-500",
              ghost: "font-bold hover:bg-gray-100",
          },
          size: {
              large: "p-3 w-25 h-15",
              small: "p-3 w-30 h-10"
          },
      },
      defaultVariants:{
          variant: "dark",
          size: "large"
      }
  }
)

type ButtonVariants = VariantProps<typeof buttonStyles>

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
    readonly variant = input<ButtonVariants['variant']>('dark');
    readonly size = input<ButtonVariants['size']>('large');
    readonly type = input<'button' | 'submit' | 'reset'>('button');

    protected readonly buttonStyles = buttonStyles;

    @Output() clickEvent = new EventEmitter<MouseEvent>()

    onClick(event: MouseEvent) {
        console.log("Sending click event")
        this.clickEvent.emit(event)
    }
}
