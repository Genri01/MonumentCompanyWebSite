const path = require('path');
const products = [{
    category: 'granit', // Гранит
    text: 'Гранит',
    monuments: [{
        subcategory: 'chpu', // Гранит Чпу
        subtext: 'Чпу',
        items: [ // В этот массив вставляется вся информация по памятнику
          {
            material: 'granit', // материал 
            img: path.join(__dirname, '../../shared/images/chpu/', '1.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое 
            category: 'chpu',
            id: '1', // не трогать 
          },
          {
            material: 'granit', // материал 
            img: path.join(__dirname, '../../shared/images/chpu/', '2.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое 
            category: 'chpu',
            id: '2', // не трогать 
          },
          {
            material: 'granit', // материал 
            img: path.join(__dirname, '../../shared/images/chpu/', '3.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое 
            category: 'chpu',
            id: '3', // не трогать 
          },
          {
            material: 'granit', // материал 
            img: path.join(__dirname, '../../shared/images/chpu/', '4.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое 
            category: 'chpu',
            id: '4', // не трогать 
          },
          {
            material: 'granit', // материал 
            img: path.join(__dirname, '../../shared/images/chpu/', '5.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое 
            category: 'chpu',
            id: '5', // не трогать 
          },
          {
            material: 'granit', // материал 
            img: path.join(__dirname, '../../shared/images/chpu/', '6.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '6', // не трогать 
          },
          {
            material: 'granit', // материал 
            img: path.join(__dirname, '../../shared/images/chpu/', '7.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '7', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '8.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '8', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '9.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '9', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '10.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '10', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '11.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '11', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '12.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '12', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '13.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '13', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '14.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '14', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '15.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '15', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '16.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '16', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '17.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '17', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '18.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '18', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '19.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '19', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '20.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '20', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '21.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '21', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '22.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '22', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '23.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '23', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '24.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '24', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '25.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '25', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '1.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '26', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '27.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '27', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '28.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '28', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '29.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '29', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '30.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '30', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '31.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '31', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '32.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '32', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '33.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '33', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '34.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '34', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '35.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '35', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '36.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '36', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '37.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '37', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '38.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '38', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '39.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '39', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '40.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '40', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '41.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '41', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '42.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '42', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '43.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '43', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '44.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '44', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '45.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '45', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '46.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '46', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '47.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '47', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '48.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '48', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '49.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '49', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '50.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '50', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '51.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '51', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '52.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '52', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '53.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '53', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '54.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '54', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '55.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '55', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '56.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '56', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '57.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '57', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '58.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '58', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '59.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '59', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '60.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '60', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '61.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '61', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '62.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '62', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '63.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '63', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '64.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '64', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '65.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '65', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '66.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '66', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '67.png'), // фото это не трогать
            title: 'Памятник резной', // Названи
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '67', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '68.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '68', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '69.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '69', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '70.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '70', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '71.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '71', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '72.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '72', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '73.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '73', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '74.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '74', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '75.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '75', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '76.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '76', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '77.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '77', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '78.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '78', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '79.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '79', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '80.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '80', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '81.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '81', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '82.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '82', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '83.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '83', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '84.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '84', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '85.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '85', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '86.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '86', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '87.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '87', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '88.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '88', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '89.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '89', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '90.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '90', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '91.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '91', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '92.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '92', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '93.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '93', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '94.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '94', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '95.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '95', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '96.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '96', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '97.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '97', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '98.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '98', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '99.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '99', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '100.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '100', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '101.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '101', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '102.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '102', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '103.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '103', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '104.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '104', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '105.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '105', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '106.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '106', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '107.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '107', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '108.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '108', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '109.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '109', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '110.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '110', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '111.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '111', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '112.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '112', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '113.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '113', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '114.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '114', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '115.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '115', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '116.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '116', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '117.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '117', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '118.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '118', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '119.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '119', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '120.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '120', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '121.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '121', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '122.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '122', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '123.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '123', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '124.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '124', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '125.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '125', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '126.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '126', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '127.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '127', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '128.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '128', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '129.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '129', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '130.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '130', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '131.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '131', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '132.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '132', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '133.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '133', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '134.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '134', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '135.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '135', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '136.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '136', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '137.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '137', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '138.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '138', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '139.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '139', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '140.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '140', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '141.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '141', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '142.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '142', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '143.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '143', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '144.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '144', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '145.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '145', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '146.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '146', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '147.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '147', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '148.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '148', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '149.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '149', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '150.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '150', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '151.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '151', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '152.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '152', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '153.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '153', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '154.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '154', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '155.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '155', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '156.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '156', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '157.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '157', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '158.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '158', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '159.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '159', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '160.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '160', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '161.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '161', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '162.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '162', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '163.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '163', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '164.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '164', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '165.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '165', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '166.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '166', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '167.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '167', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '168.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '168', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '169.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '169', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '170.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '170', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '171.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '171', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '172.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '172', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '173.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '173', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '174.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '174', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '175.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '175', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '176.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '176', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '177.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '177', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '178.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '178', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '179.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '179', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '180.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '180', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '181.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '181', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '182.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '182', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '183.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '183', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '184.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '184', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '185.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '185', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '186.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '186', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '187.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '187', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '188.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '188', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '189.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '189', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '190.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '190', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '191.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '191', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '192.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '192', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '193.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '193', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '194.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '194', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '195.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '195', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '196.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '196', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '197.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '197', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '198.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '198', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '199.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '199', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '200.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '200', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '201.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '201', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '202.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '202', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '203.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '203', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '204.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '204', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '205.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '205', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '206.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '206', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '207.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '207', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '208.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '208', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '209.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '209', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '210.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '210', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '211.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '211', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '212.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '212', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '213.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '213', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '214.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '214', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '215.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '215', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '216.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '216', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '217.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '217', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '218.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '218', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '219.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '219', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '220.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '220', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '221.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '221', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '222.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '222', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '223.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '223', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '224.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '224', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '225.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '225', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '226.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '226', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '227.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '227', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '228.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '228', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '229.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '229', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '230.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '230', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '231.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '231', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '232.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '232', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '233.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '233', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '234.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '234', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '235.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '235', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '236.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '236', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '237.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '237', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '238.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '238', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '239.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '239', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '240.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '240', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '241.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '241', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '242.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '242', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '243.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '243', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '244.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '244', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '245.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '245', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '246.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '246', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '247.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '247', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '248.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '248', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '249.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '249', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '250.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '250', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '251.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '251', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '252.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '252', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '253.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '253', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '254.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '254', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '255.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '255', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '256.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '256', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '257.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '257', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '258.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '258', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '259.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '259', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '260.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '260', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '261.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '261', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '262.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '262', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '263.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '263', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '264.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '264', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '265.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '265', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '266.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '266', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '267.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '267', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '268.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '268', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '269.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '269', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '270.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '270', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '271.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '271', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '272.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '272', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '273.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '273', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '274.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '274', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '275.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '275', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '276.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '276', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '277.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '277', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '278.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '278', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '279.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '279', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '280.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '280', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '281.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '281', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '282.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '282', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '283.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '283', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '284.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '284', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '285.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '285', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '286.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '286', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '287.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '287', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '288.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '288', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '289.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '289', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '290.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '290', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '291.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '291', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '292.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '292', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '293.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '293', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '294.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '294', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '295.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '295', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '296.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '296', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '297.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '297', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '298.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '298', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '299.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '299', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '300.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '300', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '301.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '301', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '302.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '302', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '303.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '303', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '304.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '304', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '305.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '305', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '306.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '306', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '307.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '307', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '308.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '308', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '309.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '309', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '310.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '310', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '311.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '311', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '312.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '312', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '313.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '313', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '314.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '314', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '315.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '315', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '316.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '316', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '317.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '317', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '318.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '318', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '319.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '319', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '320.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '320', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '321.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '321', // не трогать
          },
          {
            material: 'granit', // материал
            img: path.join(__dirname, '../../shared/images/chpu/', '322.png'), // фото это не трогать
            title: 'Памятник резной', // Название
            description: 'Памятник резной из гранита', // Описание памятника любое
            category: 'chpu',
            id: '322', // не трогать
          },
        ]
      },
      {
        subcategory: 'vgranit', // Гранит вертикальный
        subtext: 'Вертикальный',
        items: [ // В этот массив вставляется вся информация по памятнику
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '1.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '1', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '2.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '2', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '3.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '3', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '4.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '4', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '5.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '5', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '6.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '6', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '7.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '7', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '8.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '8', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '9.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '9', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '10.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '10', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '11.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '11', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '12.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '12', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '13.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '13', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '14.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '14', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '15.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '15', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '16.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '16', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '17.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '17', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '18.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '18', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '19.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '19', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '20.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '20', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '21.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '21', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '22.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '22', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '23.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '23', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '24.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '24', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '25.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '25', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '26.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '26', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '27.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '27', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '28.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '28', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '29.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '29', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '30.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '30', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '31.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '31', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '32.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '32', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '33.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '33', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '34.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '34', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '35.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '35', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '36.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '36', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '37.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '37', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '38.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '38', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '39.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '39', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '40.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '40', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '41.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '41', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '42.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '42', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '43.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '43', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '44.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '44', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '45.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '45', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '46.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '46', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '47.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '47', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '48.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '48', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '49.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '49', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '50.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '50', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '51.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '51', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '52.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '52', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '53.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '53', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert/', '54.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '54', // не трогать
          },  
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '55.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '55', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '56.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '56', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '57.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '57', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '58.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '58', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '59.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '59', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '60.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '60', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '61.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '61', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '62.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '62', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '63.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '63', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '64.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '64', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '65.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '65', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '66.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '66', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '67.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '67', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '68.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '68', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '69.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '69', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '70.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '70', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '71.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '71', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '72.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '72', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '73.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '73', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '74.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '74', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '75.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '75', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '76.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '76', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '77.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '77', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '78.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '78', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '79.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '79', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '80.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '80', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '81.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '81', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '82.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '82', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '83.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '83', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '84.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '84', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '85.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '85', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '86.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '86', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '87.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '87', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '88.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '88', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '89.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '89', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '90.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '90', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '91.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '91', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '92.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '92', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '93.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '93', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '94.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '94', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '95.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '95', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '96.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '96', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '97.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '97', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '98.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '98', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '99.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '99', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '100.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '100', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '101.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '101', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '102.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '102', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '103.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '103', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '104.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '104', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '105.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '105', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '106.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '106', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '107.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '107', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '108.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '108', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '109.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '109', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '110.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '110', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '111.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '111', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '112.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '112', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '113.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '113', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '114.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '114', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '115.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '115', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '116.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '116', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '117.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '117', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '118.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '118', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '119.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '119', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '120.png') 
            ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '120', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '121.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '121', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '122.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '122', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '123.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '123', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '124.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '124', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '125.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '125', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '126.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '126', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '127.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '127', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '128.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '128', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '129.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '129', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '130.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '130', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '131.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '131', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '132.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '132', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '133.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '133', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '134.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '134', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '135.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '135', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '136.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '136', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '137.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '137', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '138.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '138', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '139.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '139', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '140.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '140', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '141.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '141', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '142.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '142', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '143.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '143', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '144.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '144', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '145.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '145', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '146.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '146', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '147.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '147', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '148.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '148', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '149.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '149', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '150.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '150', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '151.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '151', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '152.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '152', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '153.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '153', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '154.png'),
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '154', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '155.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '155', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '156.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '156', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '157.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '157', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '158.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '158', // не трогать
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/gvert', '159.png') ,
            title: 'Памятник гранитный вертикальный',
            description: 'Памятник из гранита вертикальный',
            category: 'vgranit',
            id: '159', // не трогать
          },
        ]
      },
      {
        subcategory: 'children', // Гранит детские
        subtext: 'Детские',
        items: [ // В этот массив вставляется вся информация по памятнику
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '1.png'),
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '1',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '2.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '2',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '3.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '3',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '4.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '4',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '5.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '5',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '6.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '6',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '7.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '7',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '8.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '8',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '9.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '9',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '10.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '10',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '11.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '11',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '12.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '12',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '13.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '13',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '14.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '14',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '15.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '15',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '16.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '16',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '17.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '17',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '18.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '18',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '19.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '19',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '20.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '20',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '21.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '21',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '22.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '22',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '23.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '23',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '24.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '24',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '25.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '25',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '26.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '26',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '27.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '27',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '28.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '28',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '29.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '29',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '30.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '30',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/kids', '31.png') ,
            title: 'Памятник детский гранитный',
            description: 'Памятник из гранита детский',
            category: 'children',
            id: '31',
          },
        ]
      },
      {
        subcategory: 'ggranit', // Гранит горизонтальный
        subtext: 'Горизонтальный',
        items: [ // В этот массив вставляется вся информация по памятнику
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '1.png'),
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '1',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '2.png'),
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '2',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '3.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '3',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '4.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '4',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '5.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '5',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '6.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '6',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '7.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '7',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '8.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '8',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '9.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '9',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '10.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '10',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '11.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '11',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '12.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '12',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '13.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '13',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '14.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '14',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '15.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '15',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '16.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '16',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '17.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '17',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '18.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '18',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '19.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '19',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '20.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '20',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '21.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '21',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '22.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '22',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '23.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '23',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '24.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '24',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '25.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '25',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '26.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '26',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '27.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '27',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '28.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '28',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '29.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита без портрета',
            category: 'ggranit',
            id: '29',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '30.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '30',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '31.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '31',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '32.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '32',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '33.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '33',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '34.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '34',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '35.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '35',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '36.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '36',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '37.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '37',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '38.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '38',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '39.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '39',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '40.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '40',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '41.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '41',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '42.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '42',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '43.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '43',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '44.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '44',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '45.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '45',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '46.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '46',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '47.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '47',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '48.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '48',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '49.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '49',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '50.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '50',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '51.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '51',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '52.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '52',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '53.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '53',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '54.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '54',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '55.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '55',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '56.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '56',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '57.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '57',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '58.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '58',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '59.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '59',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '60.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '60',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '61.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '61',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '62.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '62',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '63.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '63',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '64.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '64',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '65.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '65',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '66.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '66',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '67.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '67',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '68.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '68',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '69.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '69',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '70.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '70',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '71.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '71',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '72.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '72',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '73.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '73',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '7.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '74',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '75.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '75',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '76.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '76',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '77.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '77',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '78.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '78',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '79.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '79',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '80.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '80',
          },
          {
            material: 'granit',
            img: path.join(__dirname, '../../shared/images/ggoriz', '81.png') ,
            title: 'Памятники из гранита горизонтальный',
            description: 'Памятник из гранита',
            category: 'ggranit',
            id: '81',
          },
        ]
      }
    ]
  },
  {
    category: 'mramor', // Мрамор
    text: 'Мрамор',
    monuments: [{
        subcategory: 'vmramor', // Мрамор вертикальный
        subtext: 'Вертикальный',
        items: [ // В этот массив вставляется вся информация по памятнику 
          {
            material: 'mramor',
            img: path.join(__dirname, '../../shared/images/mvert', '1.png'),
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный',
            category: 'vmramor',
            id: '1',
          },
          {
            material: 'mramor',
            img: path.join(__dirname, '../../shared/images/mvert', '2.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный без фото',
            category: 'vmramor',
            id: '2',
          },
          {
            material: 'mramor',
            img: path.join(__dirname, '../../shared/images/mvert', '3.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный',
            category: 'vmramor',
            id: '3',
          },
          {
            material: 'mramor',
            img: path.join(__dirname, '../../shared/images/mvert', '4.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный без фото',
            category: 'vmramor',
            id: '4',
          },
          {
            material: 'mramor',
            img: path.join(__dirname, '../../shared/images/mvert', '5.png'),
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный',
            category: 'vmramor',
            id: '5',
          },
          {
            material: 'mramor',
            img: path.join(__dirname, '../../shared/images/mvert', '6.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный, без фото, открытый',
            category: 'vmramor',
            id: '6',
          },
          {
            material: 'mramor',
            img: path.join(__dirname, '../../shared/images/mvert', '7.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный',
            category: 'vmramor',
            id: '7',
          },
          {
            material: 'mramor',
            img: path.join(__dirname, '../../shared/images/mvert', '8.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '8', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '9.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '9', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '10.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '10', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '11.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '11', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '12.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '12', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '13.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '13', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '14.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '14', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '15.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '15', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '16.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '16', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '17.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный фото ЧБ', 
            category: 'vmramor',
            id: '17', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '18.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '18', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '19.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '19', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '20.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '20', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '21.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '21', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '22.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный фото ЧБ', 
            category: 'vmramor',
            id: '22', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '23.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '23', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '24.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный фото 20*30', 
            category: 'vmramor',
            id: '24', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '25.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный на 2х человек, фото ЧБ', 
            category: 'vmramor',
            id: '25', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '26.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '26', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '27.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '27', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '28.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '28', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '29.png'),
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '29', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '30.png'),
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '30', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '31.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '31', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '32.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '32', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '33.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный на 2х человек', 
            category: 'vmramor',
            id: '33', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '34.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный без фото', 
            category: 'vmramor',
            id: '34', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '35.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '35', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '36.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '36', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '37.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '37', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '38.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный без фото', 
            category: 'vmramor',
            id: '38', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '39.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '39', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '40.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '40', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '41.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '41', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '42.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '42', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '43.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '43', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '44.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '44', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '45.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '45', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '46.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '46', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '47.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '47', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '48.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный фото 20*30', 
            category: 'vmramor',
            id: '48', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '49.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '49', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '50.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '50', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '51.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '51', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '52.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '52', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '53.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '53', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '54.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '54', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '55.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '55', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '56.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '56', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '57.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '57', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '58.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '58', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '59.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '59', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '60.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '60', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '61.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '61', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '62.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '62', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '63.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный фото ЧБ', 
            category: 'vmramor',
            id: '63', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '64.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '64', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '65.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный на 2х человек', 
            category: 'vmramor',
            id: '65', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '66.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный фото овал', 
            category: 'vmramor',
            id: '66', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '67.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '67', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '68.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный без фото', 
            category: 'vmramor',
            id: '68', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '69.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '69', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '70.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный без фото', 
            category: 'vmramor',
            id: '70', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '71.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '71', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '72.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный без фото', 
            category: 'vmramor',
            id: '72', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '73.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный без фото', 
            category: 'vmramor',
            id: '73', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '74.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '74', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '75.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '75', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '76.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '76', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '77.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '27', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '78.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '78', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '79.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '79', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '80.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '80', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '81.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '81', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '82.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный фото 40*50,сердце', 
            category: 'vmramor',
            id: '82', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '83.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '83', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '84.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный с фото 20*30 овал', 
            category: 'vmramor',
            id: '84', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mvert', '85.png') ,
            title: 'Памятник Мраморный вертикальный',
            description: 'Памятник из мрамора вертикальный', 
            category: 'vmramor',
            id: '85', 
          },
        ]
      },
      {
        subcategory: 'gmramor', // Мрамор горизонтальный
        subtext: 'Горизонтальный',
        items: [ // В этот массив вставляется вся информация по памятнику 
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '1.png'),
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный, 2 портрета, 1 цветник', 
            category: 'gmramor',
            id: '86', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '2.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный,без фото, 2 кубика', 
            category: 'gmramor',
            id: '87', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '3.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный',  
            category: 'gmramor',
            id: '88', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '4.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный',  
            category: 'gmramor',
            id: '89', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '5.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '90', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '6.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '91', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '7.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный + н.п', 
            category: 'gmramor',
            id: '92', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '8.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный + н.п', 
            category: 'gmramor',
            id: '93', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '9.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный 1комплект', 
            category: 'gmramor',
            id: '94', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '10.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный 2 цветника', 
            category: 'gmramor',
            id: '95', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '11.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '96', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '12.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный увеличеный цветник', 
            category: 'gmramor',
            id: '97', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '13.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '98', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '14.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '99', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '15.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '100', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '16.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '101', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '17.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '102', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '18.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '103', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '19.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '104', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '20.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный + н.п', 
            category: 'gmramor',
            id: '105', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz/', '21.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный с фото', 
            category: 'gmramor',
            id: '106', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '22.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '107', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '23.png'),
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '108', 
          },
          {
            material: 'mramor', 
            img: path.join(__dirname, '../../shared/images/mgoriz', '24.png') ,
            title: 'Памятник мрамор горизонтальный',
            description: 'Памятник из мрамора горизонтальный', 
            category: 'gmramor',
            id: '109', 
          }
        ]
      },
    ]
  }, 
]
module.exports = {
  products,
}