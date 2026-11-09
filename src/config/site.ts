// Central configuration. Replace every PLACEHOLDER before launch.
export const site = {
  name: "VIMĀNA Collective", sinhala: "විමාන", url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsappNumber: "94000000000", // PLACEHOLDER: international format, digits only
  email: "", // PLACEHOLDER: leave empty to hide
  location: "", // PLACEHOLDER: leave empty to hide
  instagram: "https://www.instagram.com/vimana.collective/",
  facebook: "https://www.facebook.com/profile.php?id=61593871640198",
};
export const waLink = (msg: string) => `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
export const nav = [["Home","/"],["Our Story","/our-story"],["Collection","/collection"],["Heritage","/heritage"],["Contact","/contact"]] as const;
