
const productos = [{
    "id":1,
    "nombre": "Notebook HP Gamer",
    "imagen": "https://images.fravega.com/f300/3f26599877d9efbba2d76f2a2e392e5f.jpg.webp",
    "precio": 164999,
    "stock": 8,
    "descripcion": "Notebook HP Gamer Pavilion AMD Ryzen 5 8GB 256 GB SSD 15-ec1035la"
},
{
    "id":2,
    "nombre": "Celular Samsung Galaxy",
    "imagen": "https://images.fravega.com/f300/e788ab6fe5608762f6b01e10945c871e.jpg.webp",
    "precio": 53999,
    "stock": 6,
    "descripcion": "Celular Samsung Galaxy M23 5G 128GB Light Blue"
},
{
    "id":3,
    "nombre": "Monitor Gamer Samsung",
    "imagen": "https://images.fravega.com/f300/393cba5a66fe2d29273ed1e7244f3e60.jpg.webp",
    "precio": 44999,
    "stock": 7,
    "descripcion": "Monitor Gamer Samsung LF27T350FHLCZB 27"
},
{
    "id":4,
    "nombre": "Mouse Pad Gamer",
    "imagen": "https://images.fravega.com/f300/5aa8eb4b9af6722bf74082ab2b189a47.jpg.webp",
    "precio": 2399,
    "stock": 12,
    "descripcion": "Mouse Pad Gamer XL con luz Led RGB The Game House Ice&Fire"
},
{
    "id":5,
    "nombre": "Placa De Video Rtx 3090",
    "imagen": "https://images.fravega.com/f300/1637f48f5b845b3f4a48656d01a420c7.jpg.webp",
    "precio": 799999,
    "stock": 5,
    "descripcion": "Placa De Video Msi Nvidia Geforce Rtx 3090 Ventus 3x 24gb Oc"
},
{
    "id":6,
    "nombre": "Procesador Intelcore i7",
    "imagen": "https://images.fravega.com/f300/4395c94013987a5f209bdcf80eb39c09.jpg.webp",
    "precio": 103977,
    "stock": 6,
    "descripcion": "Proces Intel Alder Lake Core I7 12700kf Sin Cooler Sin Video S1700"
},
{
    "id":7,
    "nombre": "Mother Gigabyte Z690",
    "imagen": "https://images.fravega.com/f300/c5aacc137ce54ed962c51f89de56c228.jpg.webp",
    "precio": 87445,
    "stock": 13,
    "descripcion": "Mother Gigabyte Z690 Aorus Pro Para Generación 12 De Intel"
},
{
    "id":8,
    "nombre": "Silla Gamer Sharkoon",
    "imagen": "https://images.fravega.com/f300/4a7cd161bb8beca5b32aa435ebf1410c.jpg.webp",
    "precio": 76499,
    "stock": 9,
    "descripcion": "Silla Gamer Sharkoon Skiller Sgs40 Negra-gris"
},
{
    "id":9,
    "nombre": "Volante Gaming",
    "imagen": "https://images.fravega.com/f300/41217d20525fe97ea7ce4205f3ca6e21.jpg.webp",
    "precio": 29999,
    "stock": 5,
    "descripcion": "Volante Gaming con Cambios y Pedales"
},
{
    "id":10,
    "nombre": "Auricular Corsair Hs60",
    "imagen": "https://images.fravega.com/f300/660568e0f3502bab29bc84c367d91794.jpg.webp",
    "precio": 29700,
    "stock": 11,
    "descripcion": "Auricular Corsair Hs60 Haptic Usb Stereo Camuflados (8942)"
},
{
    "id":11,
    "nombre": "Gabinete Sharkoon",
    "imagen": "https://images.fravega.com/f300/a388240c7db8aec7311ecc0e17c2a53f.jpg.webp",
    "precio": 25199,
    "stock": 8,
    "descripcion": "Gabinete Sharkoon Elite Shark Ca300T"
},
{
    "id":12,
    "nombre": "Teclado Gamer Logitec",
    "imagen": "https://images.fravega.com/f300/7137502811c65902fb25326bb574541f.jpg.webp",
    "precio": 20999,
    "stock": 15,
    "descripcion": "Teclado Gamer Logitech Pro G Pro X Blue Clicky Ingles Rgb"
}]

export const obtenerProductos = () => {
    return new Promise((res)=>{
        setTimeout(()=>{
            res(productos)
        },2000)
    });
}