declare module "remark-html" {
  const html: any;
  export default html;
}

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.css" {
  const styles: { [className: string]: string };
  export default styles;
}
