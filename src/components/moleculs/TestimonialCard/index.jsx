import React from 'react'
import { DarkFour, DarkTwo } from '../../../config/Design/Color'
import { Lato, Roboto } from '../../../config/Design/Fonts'
import BorderBottom from '../../atoms/BorderBottom'
import ProfilePicture from '../../atoms/ProfilePicture'

const TestimonialCard = (props) => {
    const {data} = props
    return (
        <div className="card " style={Object.assign(selfStyle.container)}>
            <div className="card-body p-0">
                <div className="row w-100 justify-content-center" style={selfStyle.header}>
                    <div className="col-12">
                        <ProfilePicture image={data.gambar} />
                    </div>
                    <div className="col-12 mt-2 text-center">
                        <span style={selfStyle.name}>{data.nama ?? 'Rian Iregho'}</span> <br />
                        <span style={selfStyle.position}>{data.jabatan ?? "CEO D'Tech Indonesia"}</span> <br />
                    </div>
                    <div className="col-9 text-center mt-5" style={selfStyle.desc}>
                        {data.judul ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa.'}
                    </div>
                    <div className="col-11 mt-3">
                        <BorderBottom />
                    </div>
                    <div className="col-11 mt-3" style={selfStyle.content}>
                        <div className="row">
                            <div className="col-11">
                            {data.testimoni ?? 
                                `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat fringilla tortor, auctor et vitae. Venenatis, arcu vitae purus lectus pellentesque purus amet ipsum neque. Praesent orci fringilla mi
                                malesuada interdum facilisis enim. Ut morbi mauris, amet nibh facilisis elit 
                                pellentesque lobortis. A sodales a natoque in in molestie. Nec, erat risus ornare a.”  elit 
                                pellentesque lobortis. A sodales a natoque in in molestie. Nec, erat risus ornare a.”  elit 
                                pellentesque lobortis. A sodales a natoque in in molestie. Nec, erat risus ornare a.”
                            `
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const selfStyle = {
    container: {
        minHeight:614,
        borderRadius:10,
    },
    header:{
        marginTop:40,
        paddingBottom:50,
        marginLeft:0
    },
    name:{
        fontFamily:Roboto,
        fontWeight:900,
        fontSize:14,
        color:DarkTwo
    },
    position:{
        fontFamily:Roboto,
        fontWeight:500,
        fontSize:12,
        color:DarkTwo
    },
    desc:{
        fontFamily:Lato,
        fontWeight:600,
        fontSize:16,
        color:DarkTwo
    },
    content:{
        fontFamily:Lato,
        fontWeight:600,
        fontSize:16,
        color:DarkFour
    }

}

export default TestimonialCard
