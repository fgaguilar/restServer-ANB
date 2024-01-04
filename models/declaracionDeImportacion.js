
const { Schema, model } = require('mongoose');

const DeclaracionDeImportacionSchema = Schema({
    _class : {
        type: String
    },
    header : {
        codDoc : {
            type: String
        },
        desDoc : {
            type: String
        },
        verDoc : {
            type: Number
        },
        fecVer : {
            type: Date
        }
    },
    data: {
        num: {
            type: String
        },
        ver: {
            type: Number
        },
        fecTra: {
            type: Date
        },
        estAct: {
            type: String
        },
        fecEstAct: {
            type: Date
        },
        numRef: {
            type: String,
        },
        numParRec: {
            type: String,
        },
        numDocAso : {
            type: String
        },
        codAduDep: {
            type: String
        },
        desAduDep: {
            type: String
        },
        codAduDepDs : {
            type: String
        },
        desAduDepDs : {
            type: String
        },
        tipAduDepDs : {
            type: String
        },
        regAduDepDs : {
            type: String
        },
        codModDep: {
            type: String
        },
        desModDep: {
            type: String
        },
        plaReg : {
            type: String
        },
        codDesRegAdu: {
            type: String
        },
        desDesRegAdu: {
            type: String
        },
        codTraEsp: {
            type: String
        },
        desTraEsp: {
            type: String
        },
        codModReg: {
            type: String
        },
        desModReg: {
            type: String
        },
        codTipDep: {
            type: String
        },
        desTipDep: {
            type: String
        },
        numCar : {
            type: String
        },
        numExpSho : {
            type: String
        },
        codForEnv: {
            type: String
        },
        desForEnv: {
            type: String
        },
        imp: {
            oea: {
                type: Boolean
            },
            codTipDoc : {
                type: String
            },
            desTipDoc : {
                type: String
            },
            numDoc : {
                type: String
            },
            nomRazSoc : {
                type: String
            },
            cat: {
                type: String
            },
            tipOpe : [ 
                {
                    cod : {
                        type: String
                    },
                    des : {
                        type: String
                    }
                }
            ],
            codTipSol: {
                type: String
            },
            desTipSol: {
                type: String
            },
            dom: {
                calAve: {
                  type: String
                },
                num: {
                  type: String
                },
                barZon: {
                  type: String
                },
                codPai: {
                  type: String
                },
                desPai: {
                  type: String
                },
                codDep: {
                  type: String
                },
                desDep: {
                  type: String
                },
                codCiu: {
                  type: String
                },
                desCiu: {
                  type: String
                },
                tel: {
                  type: String
                },
                fax: {
                  type: String
                },
                corEle: {
                  type: String
                },
                sitWeb: {
                  type: String
                }
            }
        },
        con: {
            oea: {
                type: Boolean
            },
            codTipDoc : {
                type: String
            },
            desTipDoc : {
                type: String
            },
            numDoc : {
                type: String
            },
            nomRazSoc : {
                type: String
            },
            tipOpe : [ 
                {
                    cod : {
                        type: String
                    },
                    des : {
                        type: String
                    }
                }
            ],
            codTipSol: {
                type: String
            },
            desTipSol: {
                type: String
            },
            dom: {
                calAve: {
                  type: String
                },
                num: {
                  type: String
                },
                barZon: {
                  type: String
                },
                codPai: {
                  type: String
                },
                desPai: {
                  type: String
                },
                codDep: {
                  type: String
                },
                desDep: {
                  type: String
                },
                codCiu: {
                  type: String
                },
                desCiu: {
                  type: String
                },
                tel: {
                  type: String
                },
                fax: {
                  type: String
                },
                corEle: {
                  type: String
                },
                sitWeb: {
                  type: String
                }
            }
        },
        dec: {
            oea: {
                type: Boolean
            },
            codTipDoc : {
                type: String
            },
            desTipDoc : {
                type: String
            },
            numDoc : {
                type: String
            },
            nomRazSoc : {
                type: String
            },
            tipOpe : [ 
                {
                    cod : {
                        type: String
                    },
                    des : {
                        type: String
                    }
                }
            ],
            codTipSol: {
                type: String
            },
            desTipSol: {
                type: String
            },
            dom: {
                calAve: {
                  type: String
                },
                num: {
                  type: String
                },
                barZon: {
                  type: String
                },
                codPai: {
                  type: String
                },
                desPai: {
                  type: String
                },
                codDep: {
                  type: String
                },
                desDep: {
                  type: String
                },
                codCiu: {
                  type: String
                },
                desCiu: {
                  type: String
                },
                tel: {
                  type: String
                },
                fax: {
                  type: String
                },
                corEle: {
                  type: String
                },
                sitWeb: {
                  type: String
                }
            }
        },
        lug: {
            codPaiExp : {
                type: String
            },
            desPaiExp : {
                type: String
            },
            codLugEmb : {
                type: String
            },
            desLugEmb : {
                type: String
            },
            fecEmb : {
                type: Date
            },
            codPaiPro : {
                type: String
            },
            desPaiPro : {
                type: String
            },
            codPaiTrn : {
                type: String
            },
            desPaiTrn : {
                type: String
            },
            codAduIng : {
                type: String
            },
            desAduIng : {
                type: String
            },
            codAduDes : {
                type: String
            },
            desAduDes : {
                type: String
            },
            codLugDem : {
                type: String
            },
            desLugDem : {
                type: String
            },
            codDepDes : {
                type: String
            },
            desDepDes : {
                type: String
            },
            lugEnt : {
                type: String
            }
        },
        tra : {
            gasTraHasLugImp : {
                type: Number
            },
            gasTraHasLugEmb : {
                type: Number
            },
            gasTraHasPueTra : {
                type: Number
            },
            gasTraDesPueTra : {
                type: Number
            },
            gasCarDesMan : {
                type: Number
            },
            cosTotSegUsd : {
                type: Number
            },
            otrGasUsd : {
                type: Number
            },
            otrEroUsd : {
                type: Number
            },
            codModHasFro : {
                type: String
            },
            desModHasFro : {
                type: String
            },
            codModDesFro : {
                type: String
            },
            desModDesFro : {
                type: String
            },
            carPel : {
                type: Boolean
            }
        },
        pro : [ 
            {
                codTipDoc : {
                    type: String
                },
                desTipDoc : {
                    type: String
                },
                numDoc : {
                    type: String
                },
                nomRazSoc : {
                    type: String
                },
                dom: {
                    calAve: {
                      type: String
                    },
                    num: {
                      type: String
                    },
                    barZon: {
                      type: String
                    },
                    codPai: {
                      type: String
                    },
                    desPai: {
                      type: String
                    },
                    codDep: {
                      type: String
                    },
                    desDep: {
                      type: String
                    },
                    codCiu: {
                      type: String
                    },
                    desCiu: {
                      type: String
                    },
                    tel: {
                      type: String
                    },
                    fax: {
                      type: String
                    },
                    corEle: {
                      type: String
                    },
                    sitWeb: {
                      type: String
                    }
                },
                oea : {
                    type: Boolean
                },
                tipOpe : [ 
                    {
                        cod : {
                            type: String
                        },
                        des : {
                            type: String
                        }
                    }
                ],
                codTipSol : {
                    type: String
                },
                desTipSol : {
                    type: String
                }
            }
        ],
        fac: [
            {
                id: {
                  type: String
                },
                pro: {
                    id: {
                      type: String
                    },
                    numDoc: {
                      type: String
                    },
                    nomRazSoc: {
                      type: String
                    },
                    codCon: {
                      type: String
                    },
                    desCon: {
                      type: String
                    },
                    otrCon: {
                      type: String
                    }
                },
                codPaiAdq: {
                  type: String
                },
                desPaiAdq: {
                  type: String
                },
                num: {
                  type: String
                },
                fecEmi: {
                  type: String
                },
                otrConEntInc: {
                  type: String
                },
                codConEntInc: {
                  type: String
                },
                desConEntInc: {
                  type: String
                },
                lugEnt: {
                  type: String
                },
                otrNatTra: {
                  type: String
                },
                otrDesMer: {
                  type: String
                },
                facSujDes: {
                  type: Boolean
                },
                codNatTra: {
                  type: String
                },
                desNatTra: {
                  type: String
                },
                codMonTra: {
                  type: String
                },
                desMonTra: {
                  type: String
                },
                valTotTra: {
                  type: Number
                },
                tipCamMonTra: {
                  type: Number
                },
                codDesMer: {
                  type: String
                },
                desDesMer: {
                  type: String
                },
                codForPag: {
                  type: String
                },
                desForPag: {
                  type: String
                },
                otrForPag: {
                  type: String
                },
                codMedPag: {
                  type: String
                },
                desMedPag: {
                  type: String
                },
                otrMedPag: {
                  type: String
                },
                valFobTotUsd: {
                  type: Number
                },
                tipCamUsdBob: {
                  type: Number
                },
                valFobTotBob: {
                  type: Number
                },
                cosFleHasLugImpUsd: {
                  type: Number
                },
                cosTotSegUsd: {
                  type: Number
                },
                valCifTotUsd: {
                  type: Number
                },
                gasPorUsd: {
                  type: Number
                },
                otrGasUsd: {
                  type: Number
                },
                otrEroUsd: {
                  type: Number
                },
                valCifTotBob: {
                  type: Number
                },
                numDav: {
                  type: String
                },
                ide: {
                  type: Number
                },
                totConFac: {
                    numPag: {
                      type: Number
                    },
                    totIte: {
                      type: Number
                    },
                    totBul: {
                      type: Number
                    },
                    totPesBru: {
                      type: Number
                    },
                    totPesNet: {
                      type: Number
                    }
                }
            }
        ],
        totConDec: {
            totFac: {
              type: Number
            },
            totFob: {
              type: Number
            },
            totIte: {
              type: Number
            },
            totBul: {
              type: Number
            },
            totPesBru: {
              type: Number
            },
            totPesNet: {
              type: Number
            },
            totCif: {
              type: Number
            },
            totGasTraHasLugImp: {
              type: Number
            },
            totSeg: {
              type: Number
            }
        },
        liqTri : [ 
            {
                codImp : {
                    type: String
                },
                desImp : {
                    type: String
                },
                liqBob : {
                    type: Number
                },
                exoBob : {
                    type: Number
                },
                susBob : {
                    type: Number
                },
                totDetBob : {
                    type: Number
                }
            }
        ],
        liqOtrCar : {
            type: Number
        },
        liqTot : {
            liqBob : {
                type: Number
            },
            exoBob : {
                type: Number
            },
            susBob : {
                type: Number
            },
            totDetBob : {
                type: Number
            },
            otrImpPagBob : {
                type: Number
            },
            totCalPagBob : {
                type: Number
            }
        },
        sel : {
            can : {
                type: String
            },
            mot : {
                type: String
            },
            tecAfo : {
                numDoc : {
                    type: String
                },
                nomUsu : {
                    type: String
                },
                nom : {
                    type: String
                },
                priApe : {
                    type: String
                },
                segApe : {
                    type: String
                },
                ema : {
                    type: String
                }
            }
        },
        obsGenDec : {
            type: String
        },
        docSop : [ 
            {
                codTip : {
                    type: String
                },
                desTip : {
                    type: String
                },
                num : {
                    type: String
                },
                emi : {
                    type: String
                },
                fecEmi : {
                    type: Date
                },
                codTipMon : {
                    type: String
                },
                desTipMon : {
                    type: String
                },
                mon : {
                    type: Number
                },
                fecVen : {
                    type: Date
                },
                iteAso : [
                    {
                        type: Number
                    }
                ],
                codCon : {
                    type: String
                },
                desCon : {
                    type: String
                },
                arc: {
                      id: {
                        type: String
                      },
                      nom: {
                        type: String
                      },
                      tam: {
                        type: Number
                      },
                      tipCon: {
                        type: String
                      },
                      fecCre: {
                        type: String
                      }
                  },
                codSubTip : {
                    type: String
                },
                desSubTip : {
                    type: String
                },
                codConDoc : {
                    type: String
                },
                desConDoc : {
                    type: String
                },
                tipDocEmb : {
                    type: String
                },
                idFac: {
                    type: String
                },
                idIte: {
                    type: String
                },
                codSub: {
                    type: String
                },
                tipDoc: {
                    type: String
                },
                tipDocAra: {
                    type: String
                },
                idDocEmb: {
                    type: String
                },
                camDin: {
                      num: {
                        type: String
                      },
                      emi: {
                        type: String
                      },
                      fecEmi: {
                        type: String
                      },
                      iteAso: {
                        type: String
                      },
                      mon: {
                        type: Number
                      },
                      tipMon: {
                          cod: {
                            type: String
                          },
                          des: {
                            type: String
                          }
                      },
                      est: {
                          cod: {
                            type: String
                          },
                          des: {
                            type: String
                          }
                      }
                  }
            }
        ],
        infAdi: {
            type: String
        },
        infAdiTxt: {
            type: String
        },
        infTec: {
            opeMod: {
              type: Boolean
            },
            opeConDif: {
              type: Boolean
            },
            firPen: {
              type: Boolean
            },
            conLiq: {
              type: Boolean
            },
            docFir: [
                {
                    id: {
                      type: String
                    },
                    usrFir: {
                      type: String
                    },
                    fecFir: {
                      type: String
                    },
                    tipDoc: {
                      type: String
                    }
                }
              ],
            colRef: {
              type: String
            },
            idRef: {
              type: String
            },
            docTecDims: {
              type: String
            },
            docMenTecDims: {
              type: String
            }
        },
        infAdm: {
            fecLev: {
              type: String
            },
            suspAdm: {
              type: Boolean
            },
            fecSus: {
              type: String
            },
            ususpAdm: {
              type: String
            },
            motSus: {
              type: String
            },
            jusSus: {
              type: String
            },
            ampPla: {
              type: Boolean
            },
            pla: {
              type: Number
            },
            fecPla: {
              type: String
            },
            uampPla: {
              type: String
            },
            motPla: {
              type: String
            },
            suspPla: {
              type: Boolean
            },
            intAdm: {
              type: Boolean
            },
            fecInt: {
              type: String
            },
            uintAdm: {
              type: String
            },
            obsInt: {
              type: String
            },
            sigueAforo: {
              type: Boolean
            },
            proAfo: {
              type: Boolean
            },
            proVal: {
              type: Boolean
            },
            obsAfo: {
              type: String
            },
            obsVal: {
              type: String
            }

        },
        mulRetMer: {
            type: String
        },
        par: {
            type: String
        },
        numRup : {
            type: String
        }
    },
    payload: {
          proBpm: [
              {
                  _id: {
                    type: Number
                  },
                  nom: {
                    type: String
                  },
                  ver: {
                    type: String
                  },
                  fecCre: {
                    type: String
                  },
                  fecFin: {
                    type: String
                  }
              }
            ]
    },
    security: {
        usuCre: {
          type: String
        },
        fecCre: {
          type: String
        },
        fecUltMod: {
          type: String
        }
    },    
    log : {
        est : [ 
            {
                nom : {
                    type: String
                },
                usu : {
                    type: String
                },
                fec : {
                    type: Date
                },
                verDoc : {
                    type: Number
                }
            }
        ],
        cor: [
            {
                fec: {
                  type: String
                },
                eve: {
                  type: String
                },
                numDocSol: {
                  type: String
                },
                estDoc: {
                  type: String
                },
                verDoc: {
                  type: Number
                }
            }
        ],
    }
});

module.exports = model( 'DeclaracionDeImportacion', DeclaracionDeImportacionSchema );
