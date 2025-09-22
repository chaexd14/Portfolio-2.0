function ContactForm({ contactMessage, sending }) {
  return (
    <>
      <form onSubmit={contactMessage} className="flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className="input-field"
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className="input-field"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input-field"
          />
        </div>

        <div className="h-full">
          <textarea
            placeholder="Message"
            name="message"
            className="input-field min-h-[100px] max-h-[180px] scrollbar-none"></textarea>
        </div>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            disabled={sending}
            className={`normal-button ${sending ? 'opacity-50' : ''}`}>
            {sending ? 'Sending...' : 'Say Hi!'}
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
