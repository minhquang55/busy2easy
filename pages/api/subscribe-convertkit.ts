import isValidEmail from 'utils/isValidEmail';

const subscribeConvertkit = async (req, res) => {
  const { email_address, full_name, phone_number } = JSON.parse(req.body);

  if (!email_address) {
    return res.status(400).json({ error: 'Email is required.' });
  }
  if (!full_name) {
    return res.status(400).json({ error: 'Full name is required.' });
  }
  if (!phone_number) {
    return res.status(400).json({ error: 'Phone number is required.' });
  }

  const isValid = isValidEmail(email_address);

  if (!isValid) {
    return res.status(400).json({ error: 'Email is invalid.' });
  }

  try {
    const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
    const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;

    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
      {
        body: JSON.stringify({
          email_address,
          full_name,
          phone_number,
          api_key: API_KEY
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }
    );

    // something went wrong on the convertkit server
    if (response.status >= 400) {
      return res
        .status(400)
        .json({ error: 'There was an error subscribing to the list.' });
    }

    // Success
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default subscribeConvertkit;
