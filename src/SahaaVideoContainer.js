import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ img_src }) => {
  return (
    <div className="w-96 p-2">
      <img src={img_src} />
    </div>
  );
};

const SahaaVideoContainer = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <Link to={"watch?v=pV__qHbDBfE"} key={1}>
        <VideoCard img_src="https://i.ytimg.com/vi/hVajuTFFqKA/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLCrsMP1sjR1eKwdsCk_7cQiZK7Ayg" />
      </Link>
      <Link to={"watch?v=4Ufi8NCf8sY"} key={2}>
        <VideoCard img_src="https://i.ytimg.com/vi/4Ufi8NCf8sY/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAY1Idd5KE9PAVngclZvwc4J8qdSw" />
      </Link>
      <Link to={"watch?v=r3UbD5hijWo"} key={3}>
        <VideoCard img_src="https://i.ytimg.com/vi/r3UbD5hijWo/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLCa6RbxZIxo8hSAzyICg-dq6TmMCg" />
      </Link>
      <Link to={"watch?v=_WBnUl32GTs"} key={4}>
        <VideoCard img_src="https://i.ytimg.com/vi/_WBnUl32GTs/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAwDoYoDPjObvw75zMCXGaZ21KVnQ" />
      </Link>
      <Link to={"watch?v=mkZb_kwRZPY"} key={5}>
        <VideoCard img_src="https://i.ytimg.com/vi/mkZb_kwRZPY/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAtSuy-GnkyoosdAzdeAxW9IRt_MA" />
      </Link>
      <Link to={"watch?v=tcDZIGf_wdM"} key={6}>
        <VideoCard img_src="https://i.ytimg.com/vi/tcDZIGf_wdM/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLBCOeN9xoIzGSwUloiWgSYxRV1GsA" />
      </Link>
      <Link to={"watch?v=e_04ZrNroTo"} key={7}>
        <VideoCard img_src="https://i.ytimg.com/vi/e_04ZrNroTo/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLBPtLddojtaaV8jUjMAPURfrC6PeA" />
      </Link>
      <Link to={"watch?v=ZqWmztkLm-U"} key={8}>
        <VideoCard img_src="https://i.ytimg.com/vi/ZqWmztkLm-U/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLDLZZ1vlwCY6GVM3Txc_DdwI8N9xw" />
      </Link>
      <Link to={"watch?v=EaRl0KZNEdQ"} key={9}>
        <VideoCard img_src="https://i.ytimg.com/vi/EaRl0KZNEdQ/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLCEH7hdXlsqqXdUM4pwPTicnT1S7g" />
      </Link>
      <Link to={"watch?v=B5csN8gQY4E"} key={10}>
        <VideoCard img_src="https://i.ytimg.com/vi/B5csN8gQY4E/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLDd1OCw2cdsWMYboj5KoSCsiqlYJw" />
      </Link>
      <Link to={"watch?v=V46OByZEBzs"} key={11}>
        <VideoCard img_src="https://i.ytimg.com/vi/V46OByZEBzs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLDtmEQ9ixY4QeHGei-spjQf0t7k9w" />
      </Link>
      <Link to={"watch?v=EaYAm7CCjiI"} key={12}>
        <VideoCard img_src="https://i.ytimg.com/vi/EaYAm7CCjiI/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLA-cFUSNGrrCLDQXyaKr97CVlWg2w" />
      </Link>
      <Link to={"watch?v=DPp9pyUzo7c"} key={13}>
        <VideoCard img_src="https://i.ytimg.com/vi/DPp9pyUzo7c/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLB7Xinp7iSuocF6rwzJyi1n7VlhmA" />
      </Link>
      <Link to={"watch?v=W1n592oiwrE"} key={14}>
        <VideoCard img_src="https://i.ytimg.com/vi/W1n592oiwrE/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLB1HRCwIO_Ouvr4xtKHlBRViLLOMQ" />
      </Link>
      <Link to={"watch?v=nkLAKHABJBc"} key={15}>
        <VideoCard img_src="https://i.ytimg.com/vi/nkLAKHABJBc/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLBbMcGI9AA1U3FH4RUiHnW4g1N1IQ" />
      </Link>
      <Link to={"watch?v=vKd8dyMmW1s"} key={16}>
        <VideoCard img_src="https://i.ytimg.com/vi/vKd8dyMmW1s/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLBVHXOlxqtwoGG1aLAnF8P6_oTd_g" />
      </Link>
      <Link to={"watch?v=7cgxku5DBkk"} key={17}>
        <VideoCard img_src="https://i.ytimg.com/vi/7cgxku5DBkk/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLCIkNlOQvlbCanmwpm6mpES1EWjnQ" />
      </Link>
      <Link to={"watch?v=VlMKCchAxag"} key={18}>
        <VideoCard img_src="https://i.ytimg.com/vi/VlMKCchAxag/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLCoXnkD9jblzjdotR_CxpVxt3MX0Q" />
      </Link>
      <Link to={"watch?v=YqPxC-wXWlM"} key={19}>
        <VideoCard img_src="https://i.ytimg.com/vi/YqPxC-wXWlM/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAOCIwkV5VdoETKtngXmJjMi3ydhw" />
      </Link>
      <Link to={"watch?v=LcyYgCZ1gO0"} key={20}>
        <VideoCard img_src="https://i.ytimg.com/vi/Kv0irQnnKhU/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLAKBXzJHjbwlDjJYYpj5oL_iALGFg" />
      </Link>
      <Link to={"watch?v=yXQr5H0YdvY"} key={21}>
        <VideoCard img_src="https://i.ytimg.com/vi/yXQr5H0YdvY/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLBsp8NN6i7Ec_Ql46g91VxMI_R0uw" />
      </Link>
      <Link to={"watch?v=K2EEj9GcrSU"} key={22}>
        <VideoCard img_src="https://i.ytimg.com/vi/K2EEj9GcrSU/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLBdqW40vyIsjnJWGKGKQ3fknRcqfA" />
      </Link>
      <Link to={"watch?v=e0h2YJs_Hbs"} key={23}>
        <VideoCard img_src="https://i.ytimg.com/vi/e0h2YJs_Hbs/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLCOZLLQwyF2tFvOGcZv1UG_728pQQ" />
      </Link>
      <Link to={"watch?v=YanYDTGkLH8"} key={24}>
        <VideoCard img_src="https://i.ytimg.com/vi/YanYDTGkLH8/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLA8MV3Yey9OEKSfs4cLdPFY5syguQ" />
      </Link>
      <Link to={"watch?v=j8z7UjET1Is"} key={25}>
        <VideoCard img_src="https://i.ytimg.com/vi/j8z7UjET1Is/hq720.jpg?sqp=-oaymwEnCOgCEMoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLBcBkbGJZPdkrLZrkF3QpI368etqQ" />
      </Link>
    </div>
  );
};

export default SahaaVideoContainer;
