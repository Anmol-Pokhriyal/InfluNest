import React from "react";
import Avatar from "./Avatar";

function Note() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <div className="note">
          <h1>CEO</h1>
          <p>
            <Avatar img="https://media-exp1.licdn.com/dms/image/C4D03AQH4Ng1VzxeVug/profile-displayphoto-shrink_800_800/0/1625074890215?e=2147483647&v=beta&t=a1c5zL8lNyvhJhuk-oEFirjzixb_k9j_wTLn8uWGSac" />
            became Procter & Gamble’s CEO in June 2000, in the midst of a
            crisis. On March 7 of that year the company had announced that it
            would not meet its projected third-quarter earnings, and the stock
            price plummeted from $86 to $60 in one day, leading the Dow Jones
            Industrial Average to a 374-point decline.
          </p>
        </div>

        <div className="note">
          <h1>Founder</h1>
          <p>
            <Avatar img="https://media-exp1.licdn.com/dms/image/C5603AQG_KQJd3dMYEQ/profile-displayphoto-shrink_800_800/0/1642770636660?e=1654732800&v=beta&t=VZD_w9T3bPFGpvNuC3bC_vbit1k6Xe0t7Kme2FkPuFI" />
            {"\n"} Co-founder is a term that exists to give equal credit to
            multiple people who start a business together. A co-founder may be
            part of the vision of a startup from the get-go, or they may be
            brought on very early by the original founder because they have
            skills the founder is lacking.
          </p>
        </div>

        <div className="note">
          <h1>Chief technology officer (CTO)</h1>
          <p>
            <Avatar img="https://media-exp1.licdn.com/dms/image/C4E03AQFD9wG0BCIp-Q/profile-displayphoto-shrink_800_800/0/1620391952847?e=1654732800&v=beta&t=c0r4E6ptoA4IglK_F5MOoBTz565OeKWGBaTLPGyj7-c" />
            The chief technology officer (CTO) is the individual within an
            organization who oversees the current technology and creates
            relevant policy. A CTO should have the business knowledge necessary
            to align technology-related decisions with the organization's goals.
          </p>
        </div>
      </div>
      <div>
        <div className="note">
          <h1>Chief marketing officer (CMO)</h1>
          <p>
            <Avatar img="https://media-exp1.licdn.com/dms/image/C5103AQFIckH5PJ_12A/profile-displayphoto-shrink_800_800/0/1569002264183?e=1654732800&v=beta&t=_SqKIfrxU_gZhGKTIZQuIZ_eWhBmdJRwz6_G_2CztkI" />
            A CMO (chief marketing officer) is a C-level corporate executive
            responsible for activities in an organization that have to do with
            creating, communicating and delivering offerings that have value for
            customers, clients or business partners.
          </p>
        </div>

        <div className="note">
          <h1>Chief financial officer (CFO)</h1>
          <p>
            <Avatar img="data:image/jpeg;base64,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" />
            The chief financial officer is the officer of a company that has
            primary responsibility for managing the company's finances,
            including financial planning, management of financial risks,
            record-keeping, and financial reporting. In some sectors, the CFO is
            also responsible for analysis of data
          </p>
        </div>
      </div>
    </div>
  );
}

export default Note;
