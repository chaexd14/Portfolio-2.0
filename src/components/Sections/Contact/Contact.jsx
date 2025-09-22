'use clinet';
import ContactForm from '@/Form/contact-form';
import AnimatedTitle from '@/components/Ui/AnimatedTitle/animatedtitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

function Contact() {
  const [copied, setCopied] = useState(false);
  const [sending, setsending] = useState(false);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText('Kingamato0@gmail.com');
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = 'Kingamato0@gmail.com';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Email api
  const contactMessage = async (e) => {
    e.preventDefault();

    setsending(true);

    const formData = new FormData(e.target);

    const fname = formData.get('fname');
    const lname = formData.get('lname');
    const fullname = `${fname} ${lname}`.trim();
    formData.append('fullname', fullname);
    formData.delete('fname');
    formData.delete('lname');

    formData.append('access_key', '9ea8c1cc-16ea-422b-aa0b-764b2f62d173');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        console.log('Form Submitted Successfully');
        e.target.reset();
        setsending(false);
        emailNotif();
      } else {
        console.error('Submission Error:', data);
      }
    } catch (err) {
      console.error('Fetch Error:', err);
    }
  };

  return (
    <>
      {/* Contact */}
      <section className="flex flex-col items-center w-full gap-10 py-20 border border-red-400 h-fit lg:gap-10">
        {/* Title */}
        <div className="flex justify-center w-full border border-red-400">
          <AnimatedTitle
            text="TAB +"
            className="text-6xl font-semibold text-center text-white customFont lg:text-7xl lg:text-left"
          />

          <AnimatedTitle
            text=" Mail"
            className="customFont text-[#3B82F6] text-6xl lg:text-7xl text-center lg:text-left font-semibold"
          />
        </div>

        {/* Parent Content */}
        <div className="flex flex-col justify-center w-full h-full border border-red-400 lg:flex-row lg:justify-around">
          <div className="flex items-center justify-center w-full border border-red-400">
            <div className="flex flex-col h-full gap-10 border border-red-400">
              <section>
                <h1 className="mb-3 text-lg text-white">Email</h1>
                <button onClick={copyEmail} className="copy-button">
                  <span
                    className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${
                      copied ? 'opacity-0' : 'opacity-100'
                    }`}>
                    Kingamato0@gmail.com
                  </span>
                  <span
                    className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${
                      copied ? 'opacity-100' : 'opacity-0'
                    }`}>
                    Copied!
                  </span>
                </button>
              </section>

              <section>
                <h1 className="mb-3 text-lg text-white">Social</h1>
                <div className="flex flex-row gap-5">
                  <a
                    href="https://www.instagram.com/chaeyxd/"
                    target="_blank"
                    className="icons h-[60px] w-[60px]">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a
                    href="https://web.facebook.com/king.amato.2025?mibextid=wwXIfr&_rdc=1&_rdr#"
                    target="_blank"
                    className="icons h-[60px] w-[60px]">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://x.com/miksss0_0?s=21"
                    target="_blank"
                    className="icons h-[60px] w-[60px]">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </div>
              </section>
            </div>
          </div>

          {/* Form */}
          <div className="flex items-center justify-center w-full border border-red-400">
            <div className="border border-red-400">
              <ContactForm contactMessage={contactMessage} sending={sending} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
