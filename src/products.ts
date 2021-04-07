interface Photo {
    url: string;
    altText: string
}

interface Product {
    id: string;
    photoUrl: Photo[];
    title: string;
    description: string;
    price: string;
}

const products: Product[] = [
    {
        id: "8861369",
        photoUrl: [
            {
                url: "https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/5Combo5ChickenChopReadytoCook28b42f.jpg&h=1000&fit=cover",
                altText: "this is a chicken"
            }
        ],
        title: "5包装鸡扒 Combo 5 Chicken Chop - Ready to Cook",
        description: `好易煮 —— 鸡扒来咯！ 

        “好易煮”系列是农家平常在家所吃的菜式，省略了现代家庭烹煮过程中繁琐的食材选择、清理、调味腌制的步骤，做到轻松「剪开即煮，快速可上桌」的特点。
        
        我们将腌制好的食材以真空包装来处理，「一包一次」的分量，方便妈妈们收藏、烹煮和品尝。
        `,
        price: "RM59.90",
    }, {
        id: "8861370",
        photoUrl: [
            {
                url: "https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V21Pumpkinslice800gfb20c2.jpg&amp;h=1000&amp;fit=cover",
                altText: "this is a pumpkin slice"
            }
        ],
        title: "V21  南瓜块 Pumpkin slice (800g+-)",
        description: `南瓜块 Pumpkin slice

        • 1块：大概800g+-
        • 1 Slice ：800g+-
        `,
        price: "RM3.90",
    }, {
        id: "8861371",
        photoUrl: [
            {
                url: "https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V16LimaBeans220ged9a6c.jpg&amp;h=1000&amp;fit=cover",
                altText: "this is a Lima Beans"
            }
        ],
        title: "V16  棉豆 Lima Beans (220g+-)",
        description: "",
        price: "RM1.90",
    }, {
        id: "8861372",
        photoUrl: [
            {
                url: "https://images.weserv.nl/?url=https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/V1FrenchBeanse929df.jpg&amp;h=1000&amp;fit=cover",
                altText: "this is a French Beans"
            }
        ],
        title: "V1   富贵豆 French Beans (250g+-)",
        description: `Bukit Tinggi famous 

        富贵豆 French Beans
        
        • 1Pack (250g+-) `,
        price: "RM3.90",
    }
]

export default products
