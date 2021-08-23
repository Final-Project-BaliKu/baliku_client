import React from 'react'

export default function Modal() {
  return (
    <div>
      <button href="/components/modal#my-modal" class="btn btn-primary">open modal</button>
      <div id="my-modal" class="modal">
        <div class="modal-box">
          <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
          <div class="modal-action">
            <a href="/components/modal#" class="btn btn-primary">Accept</a>
            <a href="/components/modal#" class="btn">Close</a>
          </div>
        </div>
      </div>
    </div>
  )
}
