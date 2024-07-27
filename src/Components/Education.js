import React from "react";

function Education() {
    return (
        <div className="flex  min-h-screen justify-center mt-0.2 bg-green-100	 ">
            <div>
                <h1 className="text-center text-3xl font-semibold text-fuchsia-950"> EDUCATION QUALIFICATION </h1>
            <table className="border-separate border border-slate-400 border-spacing-2 text-center h-96 mt-2.5">
                <thead>
                    <tr >
                        <th className="border border-slate-300">QULIFICATION</th>
                        <th className="border border-slate-300">INSTITUTION</th>
                        <th className="border border-slate-300">BOARD / UNIVERSITY</th>
                        <th  className="border border-slate-300">YEAR OF PASSING</th>
                        <th  className="border border-slate-300"> PERSENTAGE/CGPA</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td  className="border border-slate-300"> BE IN MECHANICAL ENGG </td>
                        <td  className="border border-slate-300">DSCE </td>
                        <td  className="border border-slate-300">Atonomus</td>
                        <td  className="border border-slate-300">2021</td>
                        <td className="border border-slate-300">8.83</td>
                    </tr>
                    <tr>
                        <td  className="border border-slate-300"> DIPLOMA IN MECHANICAL </td>
                        <td  className="border border-slate-300">SJP </td>
                        <td  className="border border-slate-300">BTE</td>
                        <td  className="border border-slate-300">2018</td>
                        <td className="border border-slate-300">75.12</td>
                    </tr>
                    <tr>
                        <td  className="border border-slate-300"> SSLC </td>
                        <td  className="border border-slate-300">R.V.V.S </td>
                        <td  className="border border-slate-300">STATE SYLLABUS</td>
                        <td  className="border border-slate-300">2015</td>
                        <td className="border border-slate-300">89.5</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Education;