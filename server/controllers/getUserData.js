export const getUserData = async (req, res) => {
  try {
    const { userName } = req.body;

    const user = await User.findOne({ userName: userName });

    if (!user) {
      return res.status(400).json({ error: "Username not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
