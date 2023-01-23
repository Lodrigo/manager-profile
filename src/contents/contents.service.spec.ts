import { Test, TestingModule } from '@nestjs/testing';
import { ContentsService } from './contents.service';
import { Model } from 'mongoose';
import { Content } from './interfaces/content.interface'

describe('ContentService', () => {

    let contentsArray;
    let mockContent;
    let service: ContentsService;
    let model: Model<Content>

    mockContent =
    {
        id: "123456789",
        name: "Aula de artes",
        description: "Pintura em tela",
        type: "video"
    }

    contentsArray = [
        {
            id: "123456789",
            name: "Aula de artes",
            description: "Pintura em tela",
            type: "pdf"
        },
        {
            id: "987654321",
            name: "Aula de história",
            description: "História antiga",
            type: "video"
        },
        {
            id: "564789123",
            name: "Aula de inglês",
            description: "Historia antiga",
            type: "video"
        }
    ]

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ContentsService,
                {
                    provide: 'CONTENT_MODEL',
                    useValue: {
                        new: jest.fn().mockResolvedValue(mockContent),
                        constructor: jest.fn().mockResolvedValue(mockContent),
                        create: jest.fn().mockReturnValue(contentsArray[0]),
                        findOneAndUpdate: jest.fn().mockReturnValue(mockContent),
                        deleteOne: jest.fn().mockResolvedValue({
                            "data": {
                                "removeContent": false
                            }
                        }),
                        find: jest.fn().mockResolvedValue(contentsArray),
                        exec: jest.fn(),
                        findById: jest.fn().mockResolvedValue(mockContent)
                    },
                },
            ],
        }).compile();

        service = module.get(ContentsService);
        model = module.get<Model<Content>>('CONTENT_MODEL');
    })

    it('Serviço esteja definido', async () => {
        expect(service).toBeDefined();
        expect(model).toBeDefined();
    })

    it('Deve retornar uma lista de conteúdos', async () => {
        const contents = await service.findAll();
        expect(contents).toEqual(contentsArray);
    })

    it('Deve retornar um throw exception ao tentar listar todos conteúdos', async () => {
        expect(service.findAll()).rejects.toThrowError();
        expect(model.find).toBeCalledTimes(1);
    })

    it('Deve retornar apenas um conteúdo', async () => {
        const contents = await service.findOneById('123456789');
        expect(model.findById).toBeCalledTimes(1);
        expect(contents).toEqual(mockContent);
    })

    it('Deve retornar um throw exception ao tentar retornar um conteúdo', () => {
        jest.spyOn(model, 'findById').mockRejectedValueOnce(new Error());
        expect(service.findOneById('123456789')).rejects.toThrowError();
        expect(model.findById).toBeCalledTimes(1);
    })

    it('Deve cadastrar um novo conteúdo', async () => {
        const data = {
            id: "123456789",
            name: "Aula de artes",
            description: "Pintura em tela",
            type: "pdf"
        }
        
        const newContents = await service.create(data);
        expect(newContents).toEqual(contentsArray[0]);
        expect(model.create).toBeCalledTimes(1);
    })
    
    it('Deve atualizar um novo conteúdo', async () => {
        const data = {
            id: "123456789",
            name: "Aula de artes",
            description: "Pintura em tela",
            type: "pdf"
        }
        
        const updatedContent = await service.update(data);
        expect(updatedContent).toEqual(mockContent);
        expect(model.findOneAndUpdate).toBeCalledTimes(1);
    })

    it('Deve deletar um conteúdo', async () => {
        const newContents = await service.remove("123456789");
        expect(newContents).toEqual(true);
        expect(model.deleteOne).toBeCalledTimes(1);
    })

    it('Deve retornar um throw ao tentar deletar um conteúdo', () => {
        jest.spyOn(model, 'deleteOne').mockRejectedValueOnce(new Error());

        expect(service.remove("123456789")).rejects.toThrowError();
        expect(model.deleteOne).toBeCalledTimes(1);
    })
})

