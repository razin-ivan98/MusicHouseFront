// import * as React from "react"
// import { SLListStore } from "../../SLib/SLApiStore/SLListStore"
// import { Entity } from "../../SLib/SLApiStore/types"
// import { CLButton } from "../CLButton/CLButton"
// import { CLEntityCard } from "../CLEntityCard/CLEntityCard"
// import { CLFlex } from "../CLFlex/CLFlex"
// import { bindArg } from "../utils"

// interface Props<T extends Entity> {
//     listStore: SLListStore<T>
//     titleField: keyof T
//     subTitleField: keyof T
//     avatarLinkField?: keyof T
// }

// export const CLList = <T extends Entity>(props: Props<T>) => {
//     const {
//         listStore,
//         titleField,
//         subTitleField,
//         avatarLinkField
//     } = props

//     if (!listStore) {
//         return null
//     }

//     const isLoading = listStore.loadState === "pending"

//     const generateActions = (onDelete: () => void) => {
//         return <React.Fragment>
//             <CLButton variant="transparent" size="medium" iconLeft="delete" onClick={onDelete}></CLButton>
//         </React.Fragment>
//     }


//     return <CLFlex direction="column" margin="small">
//         {listStore?.items.map((item) => <CLEntityCard
//             avatarLink="https://cdn.fishki.net/upload/post/2019/08/24/3066538/98b54cf122f068003e4f2f3b0ec244ca.jpg"
//             mainTitle={item[titleField]}
//             subTitle={item.id.toString()}
//             key={`user_${item.id}`}
//             actionsElement={generateActions(bindArg(listStore.deleteFromList, item))}
//             onClick={() => console.log("Entity")}
//         />)}
//     </CLFlex>
// }
