import React,{ useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, AutoSizer, WindowScroller, InfiniteLoader } from "react-virtualized";
import Title from '../../components/Title';
import CardsMonument from '../../components/CardsMonument';
import { products } from '../../config';
import FilterItem from '../../components/FilterItem';
import Answer from '../../components/Answer';
import FilterButton from '../../components/FilterButton';
import { cart, cards } from '../../redux/selectors';
import { setCardsProducts, setBotAppMod } from '../../redux/actions/app';
import { setCategory } from '../../redux/actions/cart'; 
import { getCategoryChank, getCookie,setCookie,deleteCookie } from '../../hooks/helpservice'
import { useScroll } from '../../hooks/useScroll'
 
import images from '../../assets/images';
import images_shared from '../../shared-images'
import 'react-virtualized/styles.css';
import './style.css'; 
 
function CatalogScreen(props) {

  const { mobile } = props; 

  const category = useSelector(cart.category);
  const products = useSelector(cards.products);  

 const { arrowup } = images
 
  useEffect(() => {   
    dispatch(setBotAppMod(true));   
  },[]); 

  // useEffect(() => {    
  //   window.scrollTo({top:0,behavior:'smooth'});
  //   const path = window.location.pathname;
  //   const list = path.split('/');
  //   const cookieName = list.filter(n => n).pop();
    
  //   const position = getCookie(cookieName);
 
  // },[]); 
     
  const heightHeaderRef = useRef();
  const scroll = useScroll(heightHeaderRef)
 
  // window.onload = function () {
  // if (document.cookie.includes(window.location.href)) {
  //     if (document.cookie.match(/scrollTop=([^;]+)(;|$)/) != null) {
  //         var arr = document.cookie.match(/scrollTop=([^;]+)(;|$)/);
  //         document.documentElement.scrollTop = parseInt(arr[1]);
  //         document.body.scrollTop = parseInt(arr[1]);
  //     }
  // }
  // }
 
  const dispatch = useDispatch();
 
  let prod = getCategoryChank(products, category);

  function rowRenderer({
    index,  
    isScrolling,  
    isVisible,  
    key,  
    parent, 
    style, 
  }) {

    const product = prod.array[index];
  
    const content = <CardsMonument
    onClick={(info) => {    
      const newProducts = structuredClone(products);  
      newProducts.map((item) => {   
        item.monuments.map((category) => {  
          category.items.map((card) => {   
            if((info.category == category.subcategory) && (card.id == info.id_card)) { 
                card.active = +info.active
            }  
          }) 
        })  
      }) 
      dispatch(setCardsProducts(newProducts));   
    }}
    activeBtn={product.active}
    key={index}
    material={product.material}
    category={category}
    subcategory={product.category}
    count={product.count}
    img={product.img}
    title={product.title}
    description={product.description}
    price={product.price}
    id={product.id}
    prop={product.prop}
    info={product.info}
    sizes={product.sizes} 
  />; 
    return (
      <div key={key} style={style}>
        {content} 
      </div>
    );
  }
 
    return (
      <div className="catalog_screen" >  
        <div className='catalog_wrapper' ref={heightHeaderRef}>
          {
            mobile ?
            <> 
            <Answer title={'Категории'} category={ prod.text }>
              {
  
                [
                  { 
                    category: 'Мрамор',
                    sub: [{ txt: 'Вертикальные', id: 'vmramor'},{txt: 'Горизонтальные', id: 'gmramor'}] 
                  },
                  { 
                    category: 'Гранит', 
                    sub: [{txt: 'Детские', id: 'children'},{txt: 'ЧПУ', id: 'chpu'},{txt: 'Вертикальные', id: 'vgranit'},{txt: 'Горизонтальные', id: 'ggranit'}] 
                  }, 
                  { 
                    category: 'Акссесуары', 
                    sub: [
                      {txt: 'Шары', id: 'balls'},
                      {txt: 'Заборы', id: 'fences'},  
                      {txt: 'Лампы', id: 'lamps'}, 
                      {txt: 'Вазы', id: 'vases'},
                      {txt: 'Прочее', id: 'other'},
                    ] 
                  },
                  { 
                    category: 'Наши работы', 
                    sub: [ 
                      {txt: 'Посмотреть', id: 'works'},
                    ] 
                  },
                  { 
                    category: '3D - Макеты', 
                    sub: [
                      {txt: 'Посмотреть', id: '3d'},
                    ] 
                  }
                ].map((item, i) => { 
                  return <Answer key={i} title={item.category} category={''}> 
                    {  
                       [ item.sub.map((btn, bti) => { 
                        return  <FilterButton 
                            key={bti}
                            id={btn.id}
                            onClick={(id) => { 
                              dispatch(setCategory(id))
                            }}
                            margin={'12px 0px 0px 0px'}
                            text={btn.txt}
                          /> 
                        }),
                        item.category == 'Акссесуары' && <Answer key={i} title={'Плитка'} category={''}> 
                        {  
                          [ 
                            {txt: 'Гранитная', id: 'granitetille'},
                            {txt: 'Керамогранитная', id: 'pavingtile'},  
                            {txt: 'Тротуарная', id: 'porcelaintile'},  
                          ].map((btn, bti) => { 
                          return  <FilterButton 
                              key={bti}
                              id={btn.id}
                              onClick={(id) => { 
                                dispatch(setCategory(id))
                              }}
                              margin={'12px 0px 0px 0px'}
                              text={btn.txt}
                            /> 
                          }) 
                        }  
                      </Answer>] 
                    }  
                  </Answer>
                }) 
              } 
              <FilterButton  
                id={'all'}
                onClick={(id) => {  
                  dispatch(setCategory(id))
                }}
                width={200}
                margin={'12px 0px 0px 0px'}
                text={'Посмотреть все'}
              />
            </Answer>    
              <div className="mobileCardMonumentContainer"> 
                <WindowScroller> 
                  {
                    ({ height, isScrolling,registerChild, onChildScroll, scrollTop }) => (
                      <div ref={registerChild}>
                        <List
                          autoHeight
                          height={height}
                          isScrolling={isScrolling}
                          onScroll={onChildScroll}
                          width={360} 
                          scrollTop={scrollTop}
                          rowCount={prod.array.length}
                          rowHeight={630}
                          rowRenderer={rowRenderer}
                        />
                      </div>
                    )
                  } 
                </WindowScroller>  
                <div className='roundBtnContainer' onClick={() => { 
                  window.scrollTo({top:0,behavior:'smooth'});
                }}>
                  <img width={20} src={arrowup} />
                </div>
              </div> 
            </>
            :
            <>
              {/* <Title margin="50px 0px 0px 0px" size={38} text={`Категория: ${prod.text}`} /> */}
              {/* <FilterItem mobile={mobile} customclass="titleFilter" category={category} /> */}
              <div className="cardMonumentContainer">
              {
                // prod.map((item, i) => (<CardsMonument key={i} category={category} count={item.count} img={item.img} title={item.title} description={item.description} price={item.price} id={item.id} prop={item.prop} info={item.info} />))
              } 
              </div> 
            </>
          }
        </div>
      </div>
    );
 
}

export default CatalogScreen;
