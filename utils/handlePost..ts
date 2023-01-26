const handlePost = async (payload: { [key: string]: unknown }) => {
  const res = await fetch("https://eobnplh7vs85wit.m.pipedream.net/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return res;
};

export default handlePost;
