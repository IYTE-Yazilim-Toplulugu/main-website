import React from 'react';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer3';
import CopyRight from '../components/CopyRight';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Events = () => {
  return (
    <div className='bg-white py-4'>
    <div className='container max-w-4xl mx-auto flex justify-center flex-col items-center'>
      
      <h2 className="text-center my-12 text-4xl font-semibold">Bir sorunla mı karşılaştınız?</h2>
      <div className="mt-5 mb-8 relative z-0">
          <Accordion sx={{ position: "relative", zIndex: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Bilgilerimi Yanlış Girdim</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lütfen yöneticilerimizle aşağıdaki linkten iletişime geçiniz.
                <br />
                <a href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>
              </Typography>

            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>WhatsApp Grubuna Giremedim</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bilgilerinizle tekrar üye olmayı deneyiniz. Otomatik olarak sistem WhatsApp grubuna atacaktır.
                Sorunun devam etmesi halinde yöneticilerle iletişime geçiniz.
                <br />
                <a href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Genel Kurul Sertifikamı Alamadım</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lütfen yöneticilerimizle aşağıdaki linkten iletişime geçiniz.
                <br />
                <a href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Sertifikamı Linkedin'e Yükleyemedim</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Belgeyi indirerek yüklemeyi deneyiniz.
                Sorunun devam etmesi halinde yöneticilerle iletişime geçiniz.
                <br />
                <a href="https://card.iyteyazilim.com/">card.iyteyazilim.com</a>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Okul Numaramı Bilmiyorum</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Okul numarası İYTE Öğrenci kartınız üzerinde yazmaktadır. 9 Haneli öğrenci numaranızın bulunmaması halinde Öğrenci İşlerine başvurunuz.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>İYTE Öğrencisi Değilim Nasıl Üye Olabilirim?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Enstitü Dışı Kayıt Sistemimiz yapım aşamasındadır.
                İnstagram hesabımızı takip ederek sistem aktifleştiği zaman siz de İYTE Yazılım Topluluğu Üyesi olabilirsiniz.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Çift Ana Dal / Yan Dal Yapıyorum Bölüme Ne Yazacağım?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lütfen merkezi yerleştirme ile girdiğiniz bölümü yazınız.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Üniversite Öğrencisi Değilim, Üye Olabiliyor Muyum?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Enstitü Dışı Kayıt Sistemimiz yapım aşamasındadır.
                İnstagram hesabımızı takip ederek sistem aktifleştiği zaman siz de İYTE Yazılım Topluluğu Üyesi olabilirsiniz.
              </Typography>
            </AccordionDetails>
          </Accordion>
      </div>
    </div>
    </div>
  )
}

export default Events