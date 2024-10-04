export type IconContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function IconContainer(props: IconContainerProps) {
  return <div className="h-4 w-4" {...props} />;
}
