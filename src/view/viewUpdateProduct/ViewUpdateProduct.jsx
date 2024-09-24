import { connect } from 'react-redux';
import Header from '../../components/Header/Header'

const ViewUpdateProduct = () => {
  return(
     <div>
        <Header/>

        <div>
            <div>
                <p className='text-[8px] '>Editar Producto</p>
            </div>
        </div>
     </div>

  );
};
const mapStateToProps = (state) => {
  return {
    // state: state,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(ViewUpdateProduct);
