import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Medium } from "../../assets/icons/medium.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";

export default function Social() {
  return (
    <div className="social-row">
      <Link href="https://twitter.com/DaoPaladin" target="_blank">
        <SvgIcon color="primary" component={Twitter} />
      </Link>

      <Link href="https://discord.com/invite/paladindao" target="_blank">
        <SvgIcon color="primary" component={Discord} />
      </Link>

      <Link href="https://paladindao.medium.com/" target="_blank">
        <SvgIcon color="primary" component={Medium} />
      </Link>

      <Link href="" target="_blank">
        <SvgIcon color="primary" component={GitHub} />
      </Link>

      {/* <Link href="https://discord.me/hector" target="_blank">
        <SvgIcon color="primary" component={Discord} />
      </Link> */}
    </div>
  );
}
