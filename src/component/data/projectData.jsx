const images = import.meta.glob("../../assets/*.png", { eager: true });
const contentData = [
  {
    id: 1,
    image: images["../../assets/company-profile.png"].default,
    title: "Company Profile Website",
    description:
      "A company profile website operated in welding trading, machine, and gasses. I made this website using the Bootstrap framework and a little bit of CSS. Not completed yet, but I will finish it soon.",
    link: "",
  },
  {
    id: 2,
    image: images["../../assets/portofolio-website.png"].default,
    title: "Personal Portofolio website",
    description: "An portofolio website for my personal website...",
    link: "",
  },
];

export default contentData;
