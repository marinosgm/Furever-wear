import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
      {
        quote:
          "I absolutely adore the designs at Furever-Wears! As a proud cat mom, I’ve never seen pet-themed clothes so stylish and comfortable.",
        name: "Jessica Lee",
        designation: "Jessica Lee",
        src: "/assets/andreas.jpg",
      },
      {
        quote:
          "Finally, pet-themed hoodies that don’t compromise on quality! The fabric is soft, and my dog-loving friends keep asking where I got them.",
        name: "Tom Peterson",
        designation: "Tom Peterson",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
      },
      {
        quote:
          "Furever-Wears is a must for pet lovers. The designs are so fun and unique – I bought a matching tee and hoodie set for my whole family!",
        name: "Rachel Gomez",
        designation: "Rachel Gomez",
        src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
      },
      {
        quote:
          "I got the ‘Paw-sitive Vibes’ hoodie, and it’s officially my favorite. Soft, warm, and perfect for cozy days with my pup.",
        name: "Liam Thompson",
        designation: "Liam Thompson",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
      },
      {
        quote:
          "The attention to detail in Furever-Wears’ designs is fantastic. The shirts are comfy, and I love showing off my pet pride in style!",
        name: "Samantha Clark",
        designation: "Samantha Clark",
        src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
      },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
  }