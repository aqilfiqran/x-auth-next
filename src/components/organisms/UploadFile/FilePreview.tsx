import { Atoms } from '@/components/atoms';
import { sizeToFileReader } from '@/utils/format/size';
import { X } from 'lucide-react';

export interface FilePreviewProps {
  file: {
    file: File;
    url: string;
  };

  onDelete?: () => void;
}

export function FilePreview({ file, onDelete }: FilePreviewProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-neutral-white p-4 shadow">
      <div className="flex justify-end">
        <Atoms.IconContainer className="h-4 w-4">
          <X onClick={onDelete} className="cursor-pointer text-neutral-main" size={16} />
        </Atoms.IconContainer>
      </div>

      <div className="flex flex-col gap-0.5">
        <Atoms.Text variant="b16" className="text-neutral-black">
          {file.file.name}
        </Atoms.Text>
        <Atoms.Text variant="b12" className="text-neutral-dark">
          {sizeToFileReader(file.file.size)}
        </Atoms.Text>
      </div>
    </div>
  );
}
