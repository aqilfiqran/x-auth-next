import { Atoms } from '@/components/atoms';
import Image from 'next/image';
import { cn } from '@/utils/styles';
import React from 'react';
import { JsonType } from '@/types/common';
import { FilePreview } from './FilePreview';
import { useDropHandler } from '@/hooks/useDropHandler';

// input file props
export interface UploadFileProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
  state?: 'default' | 'error';
}

export function UploadFile({ className, disabled, placeholder, state = 'default', ...props }: UploadFileProps) {
  const [preview, setPreview] = React.useState<JsonType>();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChangeValue = (files: FileList | null) => {
    if (files) {
      const file = files[0];
      setPreview({
        file,
        url: URL.createObjectURL(file),
      });
      return;
    }

    !preview && handleReset();
  };

  const handleReset = () => {
    setPreview(undefined);
    inputRef.current!.value = '';
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    handleChangeValue(files);
    props?.onChange?.(event);
  };

  const handleClick = () => {
    // if data-trigger is reset, do nothing
    inputRef.current?.click();
  };

  function handleDrop(e: JsonType) {
    const files = e.dataTransfer.files;
    handleChangeValue(files);
  }

  const {
    active: dragActive,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
  } = useDropHandler<HTMLFormElement>(handleDrop);

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <form
      className={cn(
        'flex h-fit cursor-pointer flex-col gap-8 rounded-md border border-dashed border-neutral-light bg-neutral-semantic px-4 py-6 transition-all duration-200 ease-in-out',
        // hover
        dragActive && 'bg-neutral-white',
        disabled && 'cursor-not-allowed border-neutral-main bg-neutral-semantic',
        state === 'error' && 'border-danger-main bg-danger-semantic',
        className
      )}
      onSubmit={e => e.preventDefault()}
      onDragEnter={onDragEnter}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
    >
      <input {...props} className="hidden" ref={inputRef} type="file" onChange={handleChange} multiple={false} />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <Image src="/illustrations/attachment.svg" alt="Upload" width={64} height={64} />
          <Atoms.Text variant="b14" className="text-neutral-black">
            {placeholder || 'Drag and drop your file here'}
          </Atoms.Text>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Atoms.Text variant="b14" className="text-neutral-black">
            or
          </Atoms.Text>

          <Atoms.Button
            size="lg"
            className={cn(
              'w-fit !border-neutral-light !text-neutral-dark',
              !disabled && 'hover:!border-neutral-dark hover:!text-neutral-black',
              disabled && 'cursor-not-allowed bg-neutral-semantic text-neutral-gray',
              state === 'error' && '!bg-neutral-white'
            )}
            variant="outlined"
            color="light"
            onClick={handleClick}
            disabled={disabled}
          >
            Unggah file
          </Atoms.Button>
        </div>
      </div>

      {preview && <FilePreview file={preview} onDelete={handleReset} />}
    </form>
  );
}
