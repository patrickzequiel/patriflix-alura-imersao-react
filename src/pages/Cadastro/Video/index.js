import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroVideo() {
  return (
    <div>
      <PageDefault >
        <h1>Cadastro de Video</h1>

        <Link to="/cadastro/video">
          Cadastrar Video
        </Link>
      </PageDefault>
    </div>
  )
}

export default CadastroVideo;