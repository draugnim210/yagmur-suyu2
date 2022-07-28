import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  return (
    <div className="outerContainer">
      <div className="formMainContainer">
        <h1>Yağmur Suyu Deposu Başvuru Formu</h1>
        <div className="formContainer">
          <form>
            <div className="kisiselCont">
              <h1>Kişisel Bilgiler</h1>
              <div className="kisiselBilgiler">
                <input type="text" placeholder="Ad Soyad*" />
                <input type="text" placeholder="Doğum Tarihi*" />
                <input type="text" placeholder="TC*" />
              </div>
            </div>
            <div className="yapiBilgileriCon">
              <h1>Bina Yapı Bilgisi</h1>
              <div className="yapiBilgileri">
                <div className="yapiBilgileri_info">
                  <h3>Bina Yapı Bilgisi</h3>
                  <div className="yapiBilgileri_radio">
                    <div className="yapiRadioGroup">
                      <input
                        type="radio"
                        id="apartman"
                        value="apartman"
                        name="bina"
                      />
                      <label for="apartman">Apartman</label>
                    </div>
                    <div className="yapiRadioGroup">
                      <input
                        type="radio"
                        id="müstakil"
                        value="müstakil"
                        name="bina"
                      />
                      <label for="apartman">Müstakil</label>
                    </div>
                  </div>
                  <div className="line"></div>
                  <div className="yapiBilgileri_info">
                    <h3>Başvuru Sahibi Apartmanda Yaşıyor İse:</h3>
                    <div className="yapiBilgileri_radio">
                      <div className="yapiFirstRadioGroup">
                        <input type="radio" id="apartman" value="apartman" />
                        <label for="apartman">Yöneticiyim</label>
                      </div>
                      <div className="yapiSecondRadioGroup">
                        <input type="radio" id="müstakil" value="müstakil" />
                        <label for="apartman">Yönetici Değilim</label>
                      </div>
                    </div>
                    <div className="fileUpload">
                      <input
                        required=""
                        name="userfile"
                        type="file"
                        accept=".pdf, .ppt, .pptx, .doc, .docx"
                      />
                      <p>Belge Ekle</p>
                    </div>
                    <div className="line"></div>
                  </div>
                  <div className="yapiBilgileri_info">
                    <h3>Başvuru Sahibi Müstakil Evde Yaşıyor İse:</h3>
                    <div className="yapiBilgileri_radio">
                      <div className="yapiFirstRadioGroup">
                        <input type="radio" id="apartman" value="apartman" />
                        <label for="apartman">Mülk Sahibiyim</label>
                      </div>
                      <div className="yapiSecondRadioGroup">
                        <input type="radio" id="müstakil" value="müstakil" />
                        <label for="apartman">Mülk Sahibi Değilim</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="yapiBilgileri_adres">
                  <h3>Adres</h3>
                  <div className="yapiBilgileri-inputs">
                    <input type="text" placeHolder="Cep Telefonu*"></input>
                    <input type="email" placeHolder="E-mail*"></input>
                    <input type="text" placeHolder="İlçe*"></input>
                    <input type="text" placeHolder="Mahalle*"></input>
                    <input type="text" placeHolder="Adres*"></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="depo-bilgileri">
              <h2>Depo Bilgisi</h2>
              <div className="depo-kapasitesi-con">
                <h4>Talep Edilen Depo Kapasitesi:</h4>
                <div className="depo-kapasitesi">
                  <div className="depo-kapasitesi_ogeleri">
                    <input type="radio" className="big-radios"></input>
                    <label>1 Ton</label>
                  </div>
                  <div className="depo-kapasitesi_ogeleri">
                    <input type="radio" className="big-radios"></input>
                    <label>2 Ton</label>
                  </div>
                  <div className="depo-kapasitesi_ogeleri">
                    <input type="radio" className="big-radios"></input>
                    <label>3 Ton</label>
                  </div>
                  <div className="depo-kapasitesi_ogeleri">
                    <input type="radio" className="big-radios"></input>
                    <label>4 Ton</label>
                  </div>
                </div>
                <div className="su-deposu-image-div">
                  <img src="../images/su-deposu.png"></img>
                </div>
                <div className="horizontal-line">
                  <hr></hr>
                </div>
                <div className="yagmur-suyu-alan">
                  <h4>
                    Yağmursuyu Deposu Kurulumu Yapılacak Alanın Mevcut Durumu:
                  </h4>
                  <div className="yagmur-suyu-alan-inner">
                    <input type="radio" className="big-radios"></input>
                    <label className="radio-labels-big">
                      Yerüstünde depoyu kurabileceğim uygun alana sahibim.
                    </label>
                    <input type="radio" className="big-radios"></input>
                    <label className="radio-labels-big">
                      Yerüstünde depoyu kurabileceğim uygun bir alanım yok.
                    </label>
                  </div>
                  <div>
                    <input
                      required=""
                      name="userfile"
                      type="file"
                      accept=".pdf, .ppt, .pptx, .doc, .docx"
                    />
                    <p>Belge Ekle</p>
                  </div>
                </div>
                <div className="horizontal-line">
                  <hr></hr>
                </div>
                <div className="yagmur-suyu-zemin-con">
                  <h4>Deponun Yerleştirileceği Zeminin Durumu:</h4>
                  <div className="yagmur-suyu-zemin-radios">
                    <input type="radio" className="big-radios"></input>
                    <label className="radio-labels-big">
                      Bahçede depoyu yerleştirebileceğim düz bir zeminim var.
                    </label>
                    <input type="radio" className="big-radios"></input>
                    <label className="radio-labels-big">
                      Bahçede depoyu yerleştirebileceğim düz bir zeminim var.
                    </label>
                  </div>
                </div>
                <div className="horizontal-line">
                  <hr></hr>
                </div>
                <div className="yagmur-suyu-boru-durumu">
                  <h4>
                    Yağmursuyu İniş Borularının Durumu İle İlgili Bilgiler:
                  </h4>
                  <p>
                    Çatı suyunun zemine inişini sağlayan yağmursuyu iniş
                    boruları, her bina için farklı adette ve nitelikte
                    olmaktadır. Bazı iniş boruları sadece çatıdan gelen yağmur
                    suyunu, bazıları ise hem çatıdan hem de balkonlardan gelen
                    yağmur suyunu ve balkon suyunu aynı boru ile toplamaktadır.
                    Bu durumda balkonların yıkanmasında kullanılan deterjanlı
                    sular, çatıdan gelen yağmursularına karışmaktadır. Eğer
                    balkon suyu ile çatı suyunu bir arada toplayan sistem
                    bulunuyorsa bu suların depolanmaması gerekmektedir.
                  </p>
                  <div className="yagmur-suyu-boru-durumu-radios-con">
                    <input type="radio" className="big-radios"></input>
                    <label className="radio-labels-big">
                      Yağmursuyu iniş boruları balkonlar ile birleşmeden
                      doğrudan çatıdan zemine ulaşıyor.
                    </label>
                    <input type="radio" className="big-radios"></input>
                    <label className="radio-labels-big">
                      Yağmursuyu iniş boruları balkonlardan gelen suları da
                      alacak şekilde bileşik sistem olarak çalışıyor
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="cati-bilgileri">
              <h2>Çatı Bilgileri</h2>
              <h3>Çatının Durumu İle İlgili Bilgiler</h3>
              <div className="cati-bilgileri-radio">
                <input type="radio" className="big-radios"></input>
                <label className="radio-labels">
                  Çatı halihazırda temiz durumdadır. Belirli aralıklarla
                  temizliği yapılmaktadır.
                </label>
                <input type="radio" className="big-radios"></input>
                <label className="radio-labels">
                  Çatı uzun süredir temizlenmemiştir.
                </label>
              </div>
              <hr></hr>
              <h3>
                Yağmur Suyu Oluklarının ve Borularının Durumu İle İlgili
                Bilgiler
              </h3>
              <div className="cati-bilgileri-radio">
                <input type="radio" className="big-radios"></input>
                <label className="radio-labels">
                  Yağmursuyu olukları ve boruları sağlam ve işler durumdadır,
                  sızdırma yoktur.
                </label>
                <input type="radio" className="big-radios"></input>
                <label className="radio-labels">
                  Yağmursuyu olukları ve borularının sızmadan dolayı değişmesi
                  gerekmektedir.
                </label>
              </div>
              <hr></hr>
              <h3>Yağmur Suyu İniş Borularının Bağlantıları</h3>
              <div className="cati-bilgileri-radio">
                <input type="radio" className="big-radios"></input>
                <label className="radio-labels">
                  Depoya bağlanacak yağmursuyu iniş borusu halihazırda
                  kanalizasyon şebekesine bağlıdır.
                </label>
                <input type="radio" className="big-radios"></input>
                <label className="radio-labels">
                  Depoya bağlanacak yağmursuyu iniş borusu halihazırda
                  yağmursuyu şebekesine bağlıdır.
                </label>
              </div>
              <div className="cati-bilgileri-radio">
                <input type="radio" className="big-radios"></input>
                <label className="radio-labels">
                  Depoya bağlanacak yağmursuyu iniş borusu bahçeye akmaktadır.
                </label>
                <input type="radio" className="big-radios"></input>
                <label className="radio-labels">
                  Depoya bağlanacak yağmursuyu iniş borusu sokağa akmaktadır.
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
