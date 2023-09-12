import React from 'react'

const SocialTradeListMaster = () => {
    const data = [
        {
            no : 1,
            name : "Rian Iregho",
            server : "MT5",
            gain : '90%',
        },
        {
            no : 2,
            name : "Rian Iregho",
            server : "MT5",
            gain : '90%',
        },
        {
            no : 3,
            name : "Rian Iregho",
            server : "MT5",
            gain : '90%',
        }
    ]
    return (
        <div className="w-100 mb-5">
            <div className="wrapper">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Name</th>
                                        <th>Server</th>
                                        <th>Gain</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data &&
                                        data.map((item,index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.no}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.server}</td>
                                                    <td>{item.gain}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialTradeListMaster
