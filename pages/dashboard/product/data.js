import React from "react";

export default function Data() {
  return <div>Go fuck yourself</div>;
}

const data = [
  {
    input_group: { content: "" },
    input_count: 1,
    api: "content_gen/",
    input_names: [{ name: "content", count: 2, placeholder: "Content" }],
    title: "Content Generator",
    product_id: 3,
  },
  {
    input_group: { product: "", description: "" },
    input_count: 2,
    api: "facebook_ad/",
    input_names: [
      { name: "product", count: 1, placeholder: "Product Name" },
      { name: "description", count: 2, placeholder: "Description" },
    ],
    title: "Facebook Ad Generator",
    product_id: 6,
  },
  {
    input_group: { product_name: "", tone: "", keywords: "" },
    input_count: 3,
    api: "kreate_tagline/",
    input_names: [
      { name: "product_name", count: 1, placeholder: "Product Name" },
      { name: "tone", count: 1, placeholder: "Tone" },
      { name: "keywords", count: 2, placeholder: "Keywords" },
    ],
    title: "Tagline Generator",
    product_id: 5,
  },
  {
    input_group: {
      context: "",
      tone: "",
      writing_as: "",
      writing_to: "",
    },
    input_count: 4,
    api: "email_gen/",
    input_names: [
      { name: "context", count: 2, placeholder: "context" },
      { name: "tone", count: 1, placeholder: "tone" },
      { name: "writing_as", count: 1, placeholder: "writing as" },
      { name: "writing_to", count: 1, placeholder: "writing to" },
    ],
    title: "Email Generator",
    product_id: 2,
  },
  {
    input_group: { product_name: "", keywords: "" },
    input_count: 2,
    api: "kreate_desc/",
    input_names: [
      { name: "product_name", count: 1, placeholder: "Product Name" },
      { name: "keywords", count: 2, placeholder: "Keywords" },
    ],
    title: "Description Generator",
    product_id: 7,
  },
  {
    input_group: { keywords: "" },
    input_count: 1,
    api: "kreate_head/",
    input_names: [{ name: "keywords", count: 2, placeholder: "Keywords" }],
    title: "Headline Generator",
    product_id: 4,
  },
  {
    input_group: { keywords: "" },
    input_count: 1,
    api: "kreate_blog_title/",
    input_names: [{ name: "keywords", count: 2, placeholder: "keywords" }],
    title: "Blog Title Generator",
    product_id: 10,
  },
  {
    input_group: { keywords: "" },
    input_count: 1,
    api: "kreate_blog_intro/",
    input_names: [{ name: "keywords", count: 2, placeholder: "keywords" }],
    title: "Blog Intro Generator",
    product_id: 8,
  },
  {
    input_group: { keywords: "" },
    input_count: 1,
    api: "kreate_blog_outro/",
    input_names: [{ name: "keywords", count: 2, placeholder: "keywords" }],
    title: "Blog Outro Generator",
    product_id: 9,
  },
];

export { data };
