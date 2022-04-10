import nodemailer from 'nodemailer';

const emailServices = {
  sendPasswordMail: async (email, token, ad, soyad) => {
    let info = await emailServices.email().sendMail({
      from: strapi.config.currentEnvironment.smtpFrom,
      to: email,
      subject: 'Vakıf Finans',
      text: 'Vakıf Finans Şifre Sıfırlama',
      html: `<!DOCTYPE html>
      <html style="box-sizing: border-box;width: 100%;margin: 0;padding: 0;font-family: &quot;Roboto&quot;;font-size: 16px;">
      <head style="box-sizing: border-box;">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
      </head>
      <body style="box-sizing: border-box;width: 100%;margin: 0;padding: 0;font-family: &quot;Roboto&quot;;font-size: 16px;">
        <div class="Container"
          style="box-sizing: border-box;margin: 40px auto;width: 700px;box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);background-color: #f2f3f4;">
          <div class="Header"
            style="box-sizing: border-box;width: 100%;padding: 40px 20px;box-shadow: 0 1px 0 0 var(--border-content);background-color: #ffffff;border-bottom: 1px solid #d3d4d5;">
            <div class="HeaderBanner"
              style="box-sizing: border-box;width: 300px;height: 20px;background-image: url(${strapi.config.currentEnvironment.uploadPublicDomain}/images/logo-mail@3x.png);background-size: contain;background-repeat: no-repeat;float: left;">
            </div>
            <div class="HeaderTitle" style="box-sizing: border-box;text-align: right;float: right;font-size: 22px;">Şifre Sıfırlama</div>
            <div class="clearfix" style="box-sizing: border-box;clear: both;"></div>
          </div>
          <div class="Content" style="box-sizing: border-box;padding: 20px 40px;">
            <div style="height: 80px;box-sizing: border-box;"></div>
            <h1 style="box-sizing: border-box;font-size: 28px;font-weight: 500;margin: 0;">Sayın ${ad} ${soyad}</h1>
            <div style="height: 40px;box-sizing: border-box;"></div>
            <h2 style="box-sizing: border-box;font-size: 22px;font-weight: 400;opacity: 0.8;line-height: 1.5;margin: 0;">Vakıfbank FinansMarket hesabınız için şifre sıfırlama talebinde bulundunuz. Şifrenizi aşağıdaki bağlantı aracılığıyla sıfırlayabilirsiniz.</h2>
            <div style="height: 40px;box-sizing: border-box;"></div>
            <div style="box-sizing: border-box;"><a href="${strapi.config.currentEnvironment.siteDomain}/sifre-sifirlama/${token}" class="Button"
                style="box-sizing: border-box;display: inline-block;background-color: #353133;color: #eba200;padding: 10px 50px;">Doğrula</a></div>
            <div style="height: 80px;box-sizing: border-box;"></div>
            <div style="text-align: center;box-sizing: border-box;"><span style="font-size: 12px;box-sizing: border-box;">Eğer şifre sıfırlama talebini siz yapmadıysanız herhangi bir işlem yapmanıza gerek yoktur.</span></div>
          </div>
          <div class="Footer"
            style="box-sizing: border-box;width: 100%;padding: 15px 20px;box-shadow: 0 1px 0 0 var(--border-content);background-color: #ffffff;border-bottom: 1px solid #d3d4d5;">
            <div class="FooterBannerAndPhone" style="box-sizing: border-box;float: left;">
              <div class="FooterBanner"
                style="box-sizing: border-box;width: 110px;height: 20px;background-image: url(${strapi.config.currentEnvironment.uploadPublicDomain}/logo-siyah-copy@3x.png);background-size: contain;background-repeat: no-repeat;">
              </div>
              <div class="FooterPhone" style="box-sizing: border-box;font-size: 12px;font-weight: 600;color: #867e7e;">
                <div class="FooterPhoneIcon"
                  style="box-sizing: border-box;display: inline-block;width: 20px;height: 20px;background-image: url(${strapi.config.currentEnvironment.uploadPublicDomain}/icon-navigation-support@3x.png);background-size: contain;background-repeat: no-repeat;">
                </div>
                <span style="vertical-align: super;box-sizing: border-box;">0850 222 0 724</span>
              </div>
            </div>
            <a class="FooterLink" href="#34"
              style="margin-top: 15px;box-sizing: border-box;text-align: right;float: right;font-size: 9px;color: #000000;text-decoration: none;">www.vakifbankfinansmarket.com.tr</a>
            <div class="clearfix" style="box-sizing: border-box;clear: both;"></div>
          </div>
        </div>
      </body>
      </html>
      <a href="${strapi.config.currentEnvironment.siteDomain}/sifre-sifirlama/${token}">Yeni Şifre Tanımla</a>`,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  },

  sendAccountActivationMail: async ({
    ePosta,
    confirmationToken,
    name,
  }) => {
    let info = await emailServices.email().sendMail({
      from: 'eNeF-Turk Aktivasyon<info@enefturk.com>',
      to: ePosta,
      subject: 'eNeF-Turk Kullanıcı Aktivasyonu',
      text: 'eNeF-Turk Kullanıcı Aktivasyon',
      html: `<!DOCTYPE html>
      <html style="box-sizing: border-box;width: 100%;margin: 0;padding: 0;font-family: &quot;Roboto&quot;;font-size: 16px;">
      <head style="box-sizing: border-box;">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
      </head>
      <body style="box-sizing: border-box;width: 100%;margin: 0;padding: 0;font-family: &quot;Roboto&quot;;font-size: 16px;">
        <div class="Container"
          style="box-sizing: border-box;margin: 40px auto;width: 700px;box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);background-color: #f2f3f4;">
          <div class="Content" style="box-sizing: border-box;padding: 20px 40px;">
            <h1 style="box-sizing: border-box;font-size: 28px;font-weight: 500;margin: 0;text-transform: capitalize;">Merhaba ${name}</h1>
            <div style="height: 40px;box-sizing: border-box;"></div>
            <h2 style="box-sizing: border-box;font-size: 22px;font-weight: 400;opacity: 0.8;line-height: 1.5;margin: 0;">eNeF-Turk üyeliğiniz’e
              ait e-posta adresinizi lütfen doğrulayınız.</h2>
            <div style="height: 40px;box-sizing: border-box;"></div>
            <div style="box-sizing: border-box;"><a href="https://www.enefturk.com/hesap-aktivasyon?confirmationToken=${confirmationToken}" class="Button"
                style="box-sizing: border-box;display: inline-block;background-color: #040277;color: white;padding: 10px 50px;text-align: center;">eNeF-Turk üyeliğinizi aktive etmek için tıklayınız</a></div>
            <div style="height: 80px;box-sizing: border-box;"></div>
            <div style="text-align: center;box-sizing: border-box;"><span style="font-size: 12px;box-sizing: border-box;">Bu mailin size hata ile geldiğini
                düşünüyorsanız herhangi bir işlem yapmanıza gerek yoktur.</span></div>
          </div>
          <div class="Footer"
            style="box-sizing: border-box;width: 100%;padding: 15px 20px;box-shadow: 0 1px 0 0 var(--border-content);background-color: #ffffff;border-bottom: 1px solid #d3d4d5;">

            <a class="FooterLink" href="#34"
              style="margin-top: 15px;box-sizing: border-box;text-align: right;float: right;font-size: 9px;color: #000000;text-decoration: none;">www.enefturk.com</a>
            <div class="clearfix" style="box-sizing: border-box;clear: both;"></div>
          </div>
        </div>
      </body>
      </html>`,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  },

  email: config => {
    const conf = {
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    };

    conf.auth = {
      user: "info@enefturk.com",
      pass: "Dgt3.wkgR*",
    };

    let transporter = nodemailer.createTransport(config || conf);

    return transporter;
  },

  testMail: async (from, to) => {
    try {
      let info = await emailServices.email().sendMail({
        from: from || 'eNeF-Turk Aktivasyon<info@enefturk.com>',
        to: to || 'hasanserdarhamza@gmail.com',
        subject: 'Enefturk Test',
        text: 'Enefturk Test body',
        html: `<!DOCTYPE html><html><body>Test Enefturk</body></html>`,
      });
      return info;
    } catch (e) {
      console.log({e})
      return e;
    }
  },
};

export default emailServices;
