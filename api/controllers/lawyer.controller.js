export const getLawyers = (req, res) => {
  try {
    res.status(200).json({ message: 'Get lawyers data' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLawyer = (req, res) => {
  try {
    res.status(200).json({ message: 'Get single lawyer data' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createConsultation = (req, res) => {
  try {
    res.status(201).json({ message: 'Consultation created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const contactLawyer = (req, res) => {
  try {
    res.status(200).json({ message: 'Contact message sent' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
