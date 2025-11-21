import React from "react";

const data = {
  "التوريدات الكهربية": [
    { title: "شنائط لحام بمختلف الأنواع وأزمنة الشك بالبلاستيك والستانلس", image: "./assets/images/images/1.jpeg" },
    { title: "أسلاك كهربائية بجميع المقاسات", image: "./assets/images/images/2.jpeg" },
    { title: "أسلاك تليفون بجميع المقاسات", image: "./assets/images/images/3.jpeg" },
    { title: "كابلات كهرباء بترولية", image: "./assets/images/images/4.jpeg" },
    { title: "كابلات تحكم بترولية", image: "./assets/images/images/5.jpeg" },
    { title: "كابلات طاقة بجميع المقاسات", image: "./assets/images/images/6.jpeg" },
    { title: "لوحات كهربائية بجميع أنواعها", image: "./assets/images/images/7.jpeg" },
    { title: "دفايع كهربائية داخل المبنى وخارجه", image: "./assets/images/images/8.jpeg" },
    { title: "أنابيب بلاستيك بأنواع النت وكذلك جميع أنواع الجبارات والطابات", image: "./assets/images/images/9.jpg" },
    { title: "كابلات وخراطيم كهرباء وتفاصيل", image: "./assets/images/images/10.jpg" },
    { title: "جميع أنواع اللمبات والكشافات", image: "./assets/images/images/11.jpeg" },
    { title: "مفاتيح كهربائية", image: "./assets/images/images/12.jpeg" },
    { title: "خزن كهرباء بجميع المقاسات", image: "./assets/images/images/13.jpeg" }
  ],

  "التوريدات الميكانيكية": [
    { title: "مواسير مياه وخلاط ستانلس بجميع المقاسات", image: "./assets/images/images/14.jpeg" },
    { title: "خراطيم هيدرليك بجميع المقاسات ومشتملاتها", image: "./assets/images/images/15.jpeg" },
    { title: "أسلاك صلب", image: "./assets/images/images/16.jpeg" },
    { title: "أنابيب صلب ومستلزماتها", image: "./assets/images/images/17.jpeg" },
    { title: "عدد ومستلزمات الميكانيكا", image: "./assets/images/images/18.jpeg" },
    { title: "مهمات ولوحات اللحام والأمن الصناعي", image: "./assets/images/images/19.jpeg" },
    { title: "خراطيم وكبلات وصلات عازلة", image: "./assets/images/images/20.jpeg" }
  ],

  "قائمة أصناف مكملة": [
    { title: "شحوم وزيوت بترولية", image: "./assets/images/images/21.jpeg" },
    { title: "رومان بلي", image: "./assets/images/images/22.jpeg" },
    { title: "فلاتر", image: "./assets/images/images/23.jpeg" },
    { title: "السيور بأنواعها", image: "./assets/images/images/24.jpeg" },
    { title: "ضواغط هواء", image: "./assets/images/images/25.jpeg" },
    { title: "ماكينات نسيج بوية", image: "./assets/images/images/26.jpeg" },
    { title: "خشب وشكائر", image: "./assets/images/images/27.jpeg" },
    { title: "حدادات وسقالات", image: "./assets/images/images/28.jpeg" },
    { title: "شبكات حديد", image: "./assets/images/images/29.jpeg" },
    { title: "صاج مجرح", image: "./assets/images/images/30.jpeg" },
    { title: "أدوات صحية", image: "./assets/images/images/31.jpeg" },
    { title: "دهانات", image: "./assets/images/images/32.jpeg" },
    { title: "زوايا وقواطع حديدية", image: "./assets/images/images/33.jpeg" },
    { title: "خامات حديد تسليح", image: "./assets/images/images/34.jpeg" },
    { title: "شبكات كابل", image: "./assets/images/images/35.jpeg" },
    { title: "كهربائية", image: "./assets/images/images/36.jpeg" },
    { title: "لمبات قطع غيار", image: "./assets/images/images/37.jpeg" },
    { title: "اللواقط بأنواعها", image: "./assets/images/images/38.jpeg" }
  ]
};

// Preview wrapper for responsive grid layout
export function ProductListingPreview() {
  return (
    <div className="min-h-screen bg-gray-100 p-10 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-3xl p-6">
        <ProductListing />
      </div>
    </div>
  );
}

export default function ProductListing() {
  return (
    <div className="p-6">
      {Object.entries(data).map(([category, items]) => (
        <section key={category} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-right">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow p-3 flex flex-col items-center text-center hover:shadow-lg transition">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-fit rounded-xl mb-3"
                />
                <p className="text-sm font-medium leading-relaxed">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
