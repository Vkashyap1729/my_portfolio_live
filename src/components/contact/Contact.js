import React from 'react';
import Style from './Contact.module.scss';
import Terminal from '../about/Terminal';
import { Box, Button, TextareaAutosize } from '@mui/material';
import { info } from '../../info/Info';
import SocialIcon from '../home/SocialIcon';
const Contact = () => {
  const firstName = info.firstName.toLowerCase();
  function contactMeTextHeader() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat contact{firstName}{' '}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            contact{firstName} <span className={Style.green}>(main)</span> ${' '}
          </span>
          {info.contact.header}
        </p>
      </>
    );
  }
  function contactMeLinks() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat contact{firstName}{' '}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            contact{firstName} <span className={Style.green}>(main)</span> ${' '}
          </span>
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            contact{firstName} <span className={Style.green}>(main)</span> ${' '}
          </span>
          email @ {info.email}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            contact{firstName} <span className={Style.green}>(main)</span> ${' '}
          </span>
          <span style={{ color: info.baseColor }}>
            <TextareaAutosize />
            <br />
            <Button variant="success">Submit</Button>
          </span>
        </p>
      </>
    );
  }
  function contactMeTextFooter() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{' '}
          cat contact{firstName}{' '}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            contact{firstName} <span className={Style.green}>(main)</span> ${' '}
          </span>
          {info.contact.footer}
        </p>
      </>
    );
  }
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      mt={'3rem'}
    >
      <Terminal text={contactMeTextHeader()} />
      <Terminal text={contactMeLinks()} />
      <Terminal text={contactMeTextFooter()} />
    </Box>
  );
};
export default Contact;
