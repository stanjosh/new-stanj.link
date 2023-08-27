const contacts = [
  {
    name: "email",
    url: "mailto:stanjosh@gmail.com",
    image: "/images/email.svg",
  },
  {
    name: "github",
    url: "https://github.com/stanjosh",
    image: "/images/github.svg",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/stanjosh/",
    image: "/images/linkedin.svg",
  },
  {
    name: "resume",
    url: "https://stanj.link/resume",
    image: "/images/resume.svg",
  },
];



const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
        {contacts.map((item, key) => (
        <a key={key} href={item.url} className="social">
        <div style={{ backgroundImage: `url(${item.image})` }}>
        
        </div>
        </a> 

        ))}
    </div>
    </footer>

  );
};


export default Footer;