
const { Schema, model } = require('mongoose');

const DeclaracionDeImportacionDetalleSchema = Schema({
  _class: {
    type: String
  },
  header: {
    codDoc: {
      type: String
    },
    desDoc: {
      type: String
    },
    verDoc: {
      type: Number
    },
    fecVer: {
      type: Date
    }
  },
  data: {
    id: {
      type: String
    },
    numFrv: {
      type: String
    },
    numFrm: {
      type: String
    },
    idItemDocAso: {
      type: String
    },
    dim: {
      id: {
        type: String
      },
      num: {
        type: String
      },
      ver: {
        type: String
      },
      fecTra: {
        type: Date
      },
      imp: {
        codTipDoc: {
          type: String
        },
        desTipDoc: {
          type: String
        },
        numDoc: {
          type: String
        },
        nomRazSoc: {
          type: String
        }
      },
      lug: {
        codAduIng: {
          type: String
        },
        desAduIng: {
          type: String
        },
        codAduDes: {
          type: Date
        },
        desAduDes: {
          type: String
        }
      },
      fac: {
        pro: {
          id: {
            type: String
          },
          codTipDoc: {
            type: String
          },
          desTipDoc: {
            type: String
          },
          numDoc: {
            type: String
          },
          nomRazSoc: {
            type: String
          }
        },
        num: {
          type: String
        },
        id: {
          type: String
        }
      }
    },
    numIte: {
      type: Number
    },
    codRegCodNal: {
      type: String
    },
    desRegCodNal: {
      type: String
    },
    codSubAra: {
      type: String
    },
    desSubAra: {
      type: String
    },
    codCom: {
      type: String
    },
    codSup: {
      type: String
    },
    uniFis: {
      type: String
    },
    canFis: {
      type: Number
    },
    codDesCom: {
      type: String
    },
    desDesCom: {
      type: String
    },
    desMinMer: {
      strVal: {
        type: String
      },
      cod: {
        type: String
      }      
    },
    codUniCom: {
      type: String
    },
    desUniCom: {
      type: String
    },
    canCom: {
      type: Number
    },
    preUniUsd: {
      type: Number
    },
    codPaiOri: {
      type: String
    },
    desPaiOri: {
      type: String
    },
    codCiuOri: {
      type: String
    },
    desCiuOri: {
      type: String
    },
    codAcuCom: {
      type: String
    },
    desAcuCom: {
      type: String
    },
    codCriOri: {
      type: String
    },
    desCriOri: {
      type: String
    },
    codEmb: {
      type: String
    },
    desEmb: {
      type: String
    },
    tagEmb: {
      type: Boolean
    },
    canBul: {
      type: Number
    },
    pesBru: {
      type: Number
    },
    pesNet: {
      type: Number
    },
    mar: {
      type: String
    },
    relIteEmb: {
      type: String
    },
    codEst: {
      type: String
    },
    desEst: {
      type: String
    },
    otrEst: {
      type: String
    },
    resRitex: {
      type: String
    },
    codRitex: {
      type: String
    },
    canRitex: {
      type: Number
    },
    decPre: {
      type: String
    },
    subRegPre: {
      type: String
    },
    itePre: {
      type: Number
    },
    uniFisCon: {
      type: String
    },
    canFisCon: {
      type: Number
    },
    otrUniCom: {
      type: String
    },
    tim: {
      desUniTcf: {
        type: String
      },
      canTim: {
        type: Number
      },
      canRan: {
        type: Number
      },
      codModTim: {
        type: String
      },
      desModTim: {
        type: String
      },
      ranTim: [
        {
        numTra : String,
        corIni : Number,
        corFin : Number,
        canTim : Number,
        numLot : String
        }
      ]
    },
    incExeIva: {
      type: Boolean
    },
    obsVarVal: {
      type: Boolean
    },
    nomCom: {
      cod: {
        type: Date
      },
      des: {
        type: String
      }
    },
    desMer: {
      type: String
    },
    val: {
      traIteUsd: {
        type: Number
      },
      traIteBob: {
        type: Number
      },
      fobIteUsd: {
        type: Number
      },
      fobIteBob: {
        type: Number
      },
      fleLugImpIteUsd: {
        type: Number
      },
      fleLugImpIteBob: {
        type: Number
      },
      cosSegIteUsd: {
        type: Number
      },
      cosSegIteBob: {
        type: Number
      },
      valAduIteUsd: {
        type: Number
      },
      gasPorUsd: {
        type: Number
      },
      gasPorBob: {
        type: Number
      },
      otrGasUsd: {
        type: Number
      },
      otrGasBob: {
        type: Number
      },
      otrEroBob: {
        type: Number
      },
      otrEroUsd: {
        type: Number
      },
      valAduIteBob: {
        type: Number
      },
      fobUniUsd: {
        type: Number
      }
    },
    infAdiIte: {
      type: String
    },
    liqTri: [
      {
        codImp: {
          type: String
        },
        desImp: {
          type: String
        },
        basImpBob: {
          type: Number
        },
        aliImp: {
          type: Number
        },
        liqBob: {
          type: Number
        },
        porExo: {
          type: Number
        },
        exoBob: {
          type: Number
        },
        susBob: {
          type: Number
        },
        totDetBob: {
          type: Number
        }
      }      
    ],
    liqTot: {
      basImpBob: {
        type: Number
      },
      liqBob: {
        type: Number
      },
      exoBob: {
        type: Number
      },
      susBob: {
        type: Number
      },
      totDetBob: {
        type: Number
      }
    },
    docSop: [
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
    ]
  },
  security: {
    usuCre: {
      type: String
    },
    fecCre: {
      type: Date
    },
    fecUltMod: {
      type: Date
    }
  }
});

module.exports = model( 'DeclaracionDeImportacionDetalle', DeclaracionDeImportacionDetalleSchema );
