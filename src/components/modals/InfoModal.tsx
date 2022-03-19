import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Welcome Bitchass Non Halal Non Virgin Dog Touching Ass Boi" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="correct"
        />
        <Cell value="I" />
        <Cell value="H" />
        <Cell value="A" />
        <Cell value="L" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="O" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="present"
        />
        <Cell value="A" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="W" />
        <Cell value="A" />
        <Cell value="S" />
        <Cell isRevealing={true} isCompleted={true} value="T" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        All the best. I hope you ain't as bad as you are in hiding weed. 
        <a
          href="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D351798418167779&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FClasicTrollFace%2F&tbnid=TaLiHFO8ioJ3gM&vet=12ahUKEwjX5r60rNL2AhWDFFkFHTzNAJUQMygNegUIARDXAQ..i&docid=WC_h1mROdK6oGM&w=500&h=500&q=hehe%20meme%20face&hl=en&ved=2ahUKEwjX5r60rNL2AhWDFFkFHTzNAJUQMygNegUIARDXAQ"
          className="underline font-bold"
        >
          #cancelnihal
        </a>{' '}
      </p>
    </BaseModal>
  )
}