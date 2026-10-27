import Image from "next/image";
import { useId, type ComponentProps } from "react";
import { cn } from "@/lib/cn";

const labelClass = "text-caps text-secondary";
const boxClass =
  "flex w-full items-center gap-3 rounded-md border border-line bg-surface p-4 transition-shadow " +
  "focus-within:border-[1.5px] focus-within:border-court-blue focus-within:shadow-[0_0_0_4px_rgb(31_95_168/0.18)] ";

type FormFieldProps = {
  label: string;
  status?: "success" | "error";
  /** Required with status="error" — error state always shows its message. */
  helper?: string;
  /** Renders a select-style chevron. */
  showChevron?: boolean;
} & ComponentProps<"input">;

export function FormField({ label, status, helper, showChevron, disabled, className, ...rest }: FormFieldProps) {
  const id = useId();
  const error = status === "error";
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div
        className={cn(
          boxClass,
          error && "border-[1.5px] border-error focus-within:border-error",
          disabled && "bg-muted",
        )}
      >
        <input
          id={id}
          disabled={disabled}
          aria-invalid={error || undefined}
          aria-describedby={helper ? `${id}-helper` : undefined}
          className="min-w-0 flex-1 bg-transparent text-body text-ink outline-none placeholder:text-tertiary disabled:text-tertiary"
          {...rest}
        />
        {showChevron && <Image src="/icons/chevron-down.svg" alt="" width={18} height={18} />}
        {status && <Image src={`/icons/status-${status}.svg`} alt="" width={18} height={18} />}
      </div>
      {helper && (
        <p id={`${id}-helper`} className={cn("text-body-sm", error ? "text-error" : "text-tertiary")}>
          {helper}
        </p>
      )}
    </div>
  );
}

type FormSelectProps = {
  label: string;
  placeholder: string;
  options: string[];
} & ComponentProps<"select">;

export function FormSelect({ label, placeholder, options, className, ...rest }: FormSelectProps) {
  const id = useId();
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className={cn(boxClass, "relative")}>
        <select
          id={id}
          defaultValue=""
          className="min-w-0 flex-1 appearance-none bg-transparent text-body text-ink outline-none invalid:text-tertiary"
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <Image src="/icons/chevron-down.svg" alt="" width={18} height={18} className="pointer-events-none" />
      </div>
    </div>
  );
}

export function FormTextarea({ label, className, ...rest }: { label: string } & ComponentProps<"textarea">) {
  const id = useId();
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className={cn(boxClass, "h-33 items-start")}>
        <textarea
          id={id}
          className="size-full resize-none bg-transparent text-body text-ink outline-none placeholder:text-tertiary"
          {...rest}
        />
      </div>
    </div>
  );
}

export function FormUpload({ label, className, ...rest }: { label: string } & ComponentProps<"input">) {
  const id = useId();
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <span className={labelClass}>{label}</span>
      <label
        htmlFor={id}
        className="flex w-full cursor-pointer items-center gap-3 rounded-md border border-dashed border-tertiary bg-canvas px-4 py-6 transition-colors focus-within:border-court-blue hover:border-ink"
      >
        <Image src="/icons/upload.svg" alt="" width={20} height={20} />
        <span className="flex flex-col gap-0.5">
          <span className="text-body text-ink">Drop file or browse</span>
          <span className="text-body-sm text-tertiary">PDF or DOCX, max 5 MB</span>
        </span>
        <input id={id} type="file" accept=".pdf,.docx" className="sr-only" {...rest} />
      </label>
    </div>
  );
}
