import React, { useState } from 'react'
import { ListItem } from 'react-native-elements'

import { style } from './style'
import ItemList from './ItemList'
import SubItemList from './SubItemList'

import IconGarrafaPet from '../../img/icone-plasticos.svg'
import IconMetais from '../../img/icone-metais.svg'
import IconVidros from '../../img/icone-vidros.svg'
import IconPapeis from '../../img/icone-papeis.svg'
import { View } from 'react-native'


export function ListMaterias({nomeList, customItem}){
  const [expanded,setExpanded] = useState(false)
  const [plastic,setPlastic] = useState(false)
  const [metal,setMetal] = useState(false)
  const [paper,setPaper] = useState(false)
  const [glass,setGlass] = useState(false)

  function log(){
    return (
    console.log('click'),
    setPlastic(!plastic)
    )
  }


  const ItemListGeneric = ()=>{
   return(
       <>
        <ItemList iconItem={<IconGarrafaPet 
          width={45}
          height={45}
          color={'#A70202'}
          />}
          nomeItem={'PLÁSTICOS'}
          colorContainerIcon={plastic ?'#EEEEEE' : '#A70202'}
          colorTitle={plastic ?'#EEEEEE' : '#A70202'}
          colorContainerTitle={plastic ?'#A70202' :  '#C6C8CA' }
          onPress={log}
          />
          {plastic ? <SubItemList colorBackground={'#A70202'}/> : null}

          <ItemList iconItem={<IconMetais width={45} height={45}/>}
          nomeItem={'METAIS'}
          colorContainerIcon={metal ? '#EEEEEE' : '#C3A714'}
          colorTitle={metal ? '#EEEEEE' : '#C3A714'}
          colorContainerTitle={metal ? '#C3A714' : '#C6C8CA'}
          onPress={()=>setMetal(!metal)}

          />
          {metal ? <SubItemList colorBackground={'#C3A714'}/> : null}

          <ItemList iconItem={<IconPapeis width={45} height={45}/>}
          nomeItem={'PAPÉIS'}
          colorContainerIcon={paper ? '#EEEEEE' :'#120F85'}
          colorTitle={paper ? '#EEEEEE' :'#120F85'}
          colorContainerTitle={paper ? '#120F85' : '#C6C8CA'}
          onPress={()=>setPaper(!paper)}

          />
          {paper ? <SubItemList colorBackground={'#120F85'}/> : null}

          <ItemList iconItem={<IconVidros width={45} height={45}/>}
          nomeItem={'VIDROS'}
          colorContainerIcon={glass ? '#EEEEEE' : '#3BB012'}
          colorTitle={glass ? '#EEEEEE' : '#3BB012'}
          colorContainerTitle={glass ? '#3BB012' :  '#C6C8CA'}
          radiusLastItem={glass ? 0 : 20}
          onPress={()=>setGlass(!glass)}
          />
          {glass ? <SubItemList colorBackground={'#3BB012'} radiusLastSubItem={20}/> : null}
       </>
   )
  }

  return(
    <View style={expanded ? style.containerContentAcordionExpanded : style.containerContentAcordionDisable }>
      <ListItem.Accordion
        noIcon
          content={
            <>
                <ListItem.Content style={style.containerTitleAcordion}>
                  <ListItem.Title style={style.titleAcordion}>{nomeList}</ListItem.Title>
                </ListItem.Content>
            </>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}
          containerStyle={expanded ? style.containerContentAcordionExpanded : style.containerContentAcordionDisable }
        >

          {
            customItem ? customItem : <ItemListGeneric/>
          }

      </ListItem.Accordion>
    </View>
  )
}