export default function RenderPage({
  render, config
}: {
  render: (props: any) => JSX.Element;
  config: any
}) {
  return render(config);
}
