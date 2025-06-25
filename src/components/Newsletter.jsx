import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-10">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-red-primary mb-4 text-center">Subscribe to Our Newsletter</h2>
        <div id="mc_embed_signup">
          <form
            action="https://awbtravelsandtours.us14.list-manage.com/subscribe/post?u=9b619975ee7a86f44423a0860&amp;id=52a28afabc&amp;f_id=006bc2e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate space-y-4"
            target="_blank"
            noValidate
          >
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email w-full px-4 py-2 border rounded-md"
                id="mce-EMAIL"
                required
              />
            </div>

            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              <input
                type="text"
                name="b_9b619975ee7a86f44423a0860_52a28afabc"
                tabIndex="-1"
                defaultValue=""
              />
            </div>

            <div>
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="bg-red-primary text-white font-semibold px-6 py-2 rounded hover:bg-red-600"
                value="Subscribe"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
