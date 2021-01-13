import Button from 'components/Button'
export default function  Topmenu(){
    return(
        <div>
       <Button title = {'삭제하기'}><img src='/img/delete.png'></img></Button>
       <Button title = {'저장하기'}><img src='/img/done.png'></img></Button>
       <Button title = {'다시실행'}><img src='/img/redo.png'></img></Button>
       <Button title = {'뒤로가기'}><img src='/img/undo.png'></img></Button>
       </div>
    )
}
